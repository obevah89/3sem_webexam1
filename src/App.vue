<template>
  <v-app>
    <NavbarC></NavbarC>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
    <FooterC></FooterC>
  </v-app>
  
</template>

<script>
import NavbarC from '@/components/NavbarC'
import FooterC from './components/FooterC'

export default {
  name: 'App',

  components: {
    NavbarC,
    FooterC
},

  
}
</script>
