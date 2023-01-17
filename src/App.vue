<template>
  <nav>
    <div class="nav-wrapper teal lighten-2">
      <a href="#" class="brand-logo">Login</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link :to="{name: 'Admin'}">Admin</router-link></li>
        <li><router-link :to="{name: 'Promotions'}">Promotions</router-link></li>
        <li><router-link :to="{name: 'Products'}">Products</router-link></li>
      </ul>
    </div>
  </nav>
  

    <router-view></router-view>

</template>

<script>

export default{
  name: 'App',
  mounted() {

  },
}

</script>
