<template>
  <nav>
    <div class="nav-wrapper teal lighten-2">
      <a href="#" class="brand-logo">Login</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link :to="{name: 'Login'}">Login</router-link></li>
        <li><router-link :to="{name: 'People'}">People</router-link></li>
        <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      </ul>
    </div>
  </nav>
  
  <div class="row">
    <div class="col s12 m6 offset-m3">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"><router-view></router-view></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'App',
  mounted() {
    const headers = { 
    'tenant': 'eluma'
    };
    this.axios.post('http://localhost:8081/api/auth/login', {
        email: 'support-admin@mail.com',
        password: 'password'
      },  { headers })
    .then(() => {

    }
    )
  },
}

</script>
