<template>
    <v-card
      class="mx-auto"
      max-width="400"
    >
        <v-text-field class="input"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Поиск"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
        ></v-text-field>
    </v-card>
  </template>
  
  <script>
    export default {
      data: () => ({
        loaded: false,
        loading: false,
      }),
  
      methods: {
        onClick () {
          this.loading = true
  
          setTimeout(() => {
            this.loading = false
            this.loaded = true
          }, 2000)
        },
      },
    }
  </script>
  
  <style scoped>
    .input {
        width: 500px;
        max-width: 408px;
    }
  
    .v-card--variant-elevated {
      box-shadow: none;
    }
  </style>