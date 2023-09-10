<template>
  <div class="hello">
    <h1 class="text-primary">Dashboard</h1>
    <nav>
      <router-link to="/auth/login">Login</router-link> |
      <router-link to="/auth/register">Register</router-link> |
      <router-link to="/dashboard">Dasboard</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  props: {
    msg: String
  }
}
</script>
