<template>
    <div>Cities</div>
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
    async nmounted() 
    {
        const headers = {
        tenant_name: "eLuma",
        Authorization: localStorage.getItem('token'),
        };
        await this.axios
        .get("/api/cities")
        .then((Response) => {
            this.cities = Response.data;
            console.log(Response.data);
        })
        .catch((error) => {
          var data = error.response.data;
          M.toast({ html: data.message });
        });
    }    
    };
</script>