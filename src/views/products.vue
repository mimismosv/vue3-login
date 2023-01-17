<template>
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
                          <div v-if="product.description.length<75">{{product.description}}</div>
                           <div v-else>{{product.description.substring(0,75)}} <a href="#">[+]More..</a></div>
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
        categories: [],
        }
    },
    async mounted() 
    {
        console.log(this.$route.query.test)
        const headers = {
        tenant: "foo",
        Authorization: localStorage.getItem('token'),
        };

        await this.axios.get("/products").then((Response) => {
            this.products = Response.data.data;
            //console.log(this.Products);
        }).catch((error) => {
          var data = error.Response.data;
          M.toast({ html: data.message });
        });
    }    
    };
</script>