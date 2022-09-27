<template>
    <div>Cities</div>
    <div class="row">
        <div class="col m12">
          
        </div>
    </div>
</template>

<script>
    import M from "materialize-css";
    export default {
    name: "Cities",
    data() {
        return {
        cities: [],
        }
    },
    async mounted() 
    {
        const headers = {
        tenant: "eLuma",
        Authorization: localStorage.getItem('token'),
        };
        await this.axios
        .get("/api/cities", { headers })
        .then((Response) => {
            this.cities = Response.data;
            console.table(Response.data);
        })
        .catch((error) => {
          var data = error.Response.data;
          M.toast({ html: data.message });
        });
    }    
    };
</script>