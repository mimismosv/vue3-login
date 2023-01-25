<template>

    <div class="container">
        <div class="carousel carousel-slider">
            <div class="carousel-item" v-for='productOffer in productsOffer' v-bind:key='productsOffer'>

                <div class="row">
                    <div class="col s12 m7">
                    <div class="card small">
                        <div class="card-image">
                            <img :src="productOffer.picture">
                        <span class="card-title">
                                <span style="text-decoration:line-through;">                               
                                    Old Price:${{productOffer.price}}
                                </span>
                        </span>
                        </div>
                        <span class="card-title black-text text-darken-7">Promotion Price: ${{productOffer.promotion_percentage}}</span>
                        <br>
                            <a href="#">{{productOffer.name}} [+]More..</a> 
                    </div>
                    </div>
                </div>

            </div>        
        </div>
    </div>

    <div><h3>Productos</h3></div>

    <div class="container">
            <div class="row 1">
                Categorias
            </div>
            <div class="row 1">
                <div class="col l4" v-for='product in products' v-bind:key='products'>
                    <div class="card Large">
                        <div class="card-image">
                            <img :src="product.picture" >
                        </div>
                            <div class="card-panel teal">
                                <span class="card-title black-text text-darken-7">${{product.price}}</span>
                            </div>
                        <div class="card-content">
                        <p>
                            <div v-if="product.description.length<50">{{product.description}}</div>
                            <div v-else>{{product.description.substring(0,50)}} <a href="#">[+]More..</a></div>
                        </p>
                        </div>
                        <div class="card-action">
                        <a href="#">{{product.name}}</a>
                        </div>
                    </div>
                </div>        
        </div>
    </div>




</template>

<script>
    import M from "materialize-css";

    export default {
    name: "Products",
    data() {
        return {
        products: [],
        productsOffer: [],
        categories: [],
        }
    },
    async mounted() 
    {
        await this.axios.get("/products").then((Response) => {
            this.products = Response.data.data;
            //console.log(this.Products);
        }).catch((error) => {
            var data = error.Response.data;
            M.toast({ html: data.message });
        });

        await this.axios.get("/promotions").then((Response) => {
            this.productsOffer = Response.data.data;
            //console.log(this.Products);
        }).catch((error) => {
            var data = error.Response.data;
            M.toast({ html: data.message });
        });


        var elem = document.querySelector('.carousel')
        var t = new M.Carousel(elem, {numVisible:4})
    }, 
    };
</script>