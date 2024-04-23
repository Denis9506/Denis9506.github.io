let app = new Vue({
    el:"#grapefruit-app",
    data:{
        products: [
            {
                id: 1,
                title: "Ruby Red Grapefruit",
                short_text: "Sweet and tangy citrus fruit with a vibrant red flesh.",
                image: "../images/ruby_red_grapefruit.png",
                desc: {
                    plant: {
                        p1: "Ruby Red Grapefruit plants are known for their strong vigor and excellent leaf coverage.",
                        p2: "They exhibit very high productivity with consistent fruit setting.",
                        p3: "An early-maturing variety, ready for harvest in the winter to early spring."
                    },
                    fruit: {
                        f1: "These grapefruits have a long shelf life both on the plant and after harvest.",
                        f2: "The flesh boasts a vibrant red color, making them visually appealing.",
                        f3: "Average fruit size ranges from medium to large."
                    },
                    cycle: {
                        season: "Winter to early spring"
                    },
                    color: "Red"
                }
            },
            {
                id: 2,
                title: "White Marsh Grapefruit",
                short_text: "Mild and slightly bitter grapefruit with pale yellow flesh.",
                image: "../images/white_marsh_grapefruit.png",
                desc: {
                    plant: {
                        p1: "White Marsh Grapefruit plants are vigorous and provide good leaf coverage.",
                        p2: "They demonstrate high productivity with good fruit setting.",
                        p3: "This variety matures early, typically ready for harvest in the winter to early spring."
                    },
                    fruit: {
                        f1: "These grapefruits have a long shelf life both on the plant and post-harvest.",
                        f2: "The flesh has a pale yellow color.",
                        f3: "Average fruit size ranges from medium to large."
                    },
                    cycle: {
                        season: "Winter to early spring"
                    },
                    color: "Pale yellow"
                }
            },
            {
                id: 3,
                title: "Oro Blanco Grapefruit",
                short_text: "Sweet and seedless grapefruit with a greenish-yellow rind.",
                image: "../images/oro_blanco_grapefruit.png",
                desc: {
                    plant: {
                        p1: "Oro Blanco Grapefruit plants are characterized by their vigorous growth and good leaf coverage.",
                        p2: "They are highly productive and typically set a good amount of fruit.",
                        p3: "This variety ripens late in the season, from late winter to spring."
                    },
                    fruit: {
                        f1: "These grapefruits have a long shelf life on the plant and after harvest.",
                        f2: "The flesh has a sweet, mild flavor and a greenish-yellow hue.",
                        f3: "They are typically large in size."
                    },
                    cycle: {
                        season: "Late winter to spring"
                    },
                    color: "Greenish-yellow"
                }
            },
            {
                id: 4,
                title: "Star Ruby Grapefruit",
                short_text: "Deep red grapefruit with a rich flavor and few seeds.",
                image: "../images/star_ruby_grapefruit.png",
                desc: {
                    plant: {
                        p1: "Star Ruby Grapefruit plants are vigorous and provide good leaf coverage.",
                        p2: "They demonstrate high productivity with good fruit setting.",
                        p3: "This variety matures early, typically ready for harvest in the winter to early spring."
                    },
                    fruit: {
                        f1: "These grapefruits have a long shelf life both on the plant and post-harvest.",
                        f2: "The flesh has a deep red color, indicative of high antioxidant content.",
                        f3: "Average fruit size ranges from medium to large."
                    },
                    cycle: {
                        season: "Winter to early spring"
                    },
                    color: "Deep red"
                }
            },
            {
                id: 5,
                title: "Pink Grapefruit",
                short_text: "Classic citrus fruit with pink flesh and a tangy flavor.",
                image: "../images/pink_grapefruit.png",
                desc: {
                    plant: {
                        p1: "Pink Grapefruit plants are known for their strong growth and good leaf coverage.",
                        p2: "They are highly productive and bear fruit reliably.",
                        p3: "This variety matures early, typically ready for harvest in the winter to early spring."
                    },
                    fruit: {
                        f1: "These grapefruits have a long shelf life both on the plant and post-harvest.",
                        f2: "The flesh has a pink color and a tangy flavor.",
                        f3: "Average fruit size ranges from medium to large."
                    },
                    cycle: {
                        season: "Winter to early spring"
                    },
                    color: "Pink"
                }
            }
        ],
        product:[],
        cart:[],
        contactFields:{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre:'',
            otherSpecify: "",
            interested: "",
            capcha: ""
        },
        btnVisible: 0,
        cartVisible:0,
        formVisible:1,
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
            }

            if(this.cart.indexOf(String(id))==-1){
                this.cart.push(id);
                window.localStorage.setItem('cart',this.cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart:function(){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
                for(var value of this.cart){
                    for(var index in this.products){
                        if(value == this.products[index].id ){
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart:function(id){
            for(var index in this.product){
                if(id ==  this.product[index].id){
                    this.product.splice(index,1);
                    this.cart.splice(index,1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder:function(){
            this.formVisible=0;
            this.cartVisible=0;
            
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("Вашу заявку відправлено. Натисніть ОК, щоб оновити сторінку.");
        
        },
    },
});