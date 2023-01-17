<template>
    <div><h3>Promotions</h3></div>

    <div class="container">
            <div class="row 1">
                <div class="col l4" v-for='promotion in promotions' v-bind:key='promotions'>
                    <div class="card Large">
                        <div class="card-image">
                            <img :src="promotion.picture" >
                        </div>
                            <div class="card-panel teal">
                                <span style="text-decoration:line-through;">                               
                                    ${{promotion.price}}
                                </span>  
                                <span class="card-title black-text text-darken-7">${{promotion.promotion_percentage}}</span>
                            </div>
                        <div class="card-content">
                        <p>
                        </p>
                        </div>
                        <div class="card-action">
                        <a href="#">{{promotion.name}}</a>
                        </div>
                    </div>
                </div>        
        </div>
    </div>




</template>

<script>
    import M from "materialize-css";

    export default {
    name: "Promotions",
    data() {
        return {
        promotions: [],
        }
    },
    async mounted() 
    {
        await this.axios.get("/promotions").then((Response) => {
            this.promotions = Response.data.data;
            console.log(this.promotions);
        }).catch((error) => {
          var data = error.Response.data;
          M.toast({ html: data.message });
        });
    }    
    };
</script>