<template>
    <form @submit.prevent="LoginStart">
        <div class="card small">
            <div class="row">
            <div class="col m9 offset-m1">
                <label>E-Mail:</label>
                <input type="text" v-model="email" />
            </div>
            <div class="col m9 offset-m1">
                <label>password</label>
                <input type="password" v-model="password" />
            </div>
            <div class="col m9 offset-m1">
                <button v-show="!loading" type="submit" class="btn">
                Login <i class="material-icons rigth">security</i>
                </button>
                <div v-show="loading" class="progress">
                    <div class="indeterminate"></div>
                </div>                
            </div>
            </div>
        </div>
    </form>        
</template>

<script>
    import M from 'materialize-css'
    export default
    {
        name: 'Login',
        data(){
            return {
                email: '',
                password: '',
                loading: false
            }
        },
        methods: {
            async LoginStart()
            {
                const headers = { 
                    'tenant': 'eluma'
                };
                var payload = {
                    email: this.email,
                    password: this.password,
                };
                //console.log(payload)
                this.loading = true;
                await this.axios.post('/api/auth/login', payload, {headers})
                .then(Response => {
                    console.log(Response)
                })
                .catch(error => {
                    var data = error.response.data;
                    M.toast({html: data.message});
                });
                this.loading = false;
            }
        }
    }
</script>
