<template>
  <div>
    <v-container fluid>
      <h1>Dashboard</h1>
    </v-container>
    <v-row justify="center" align="center">
      <v-col xs="12" sm="8" md="6">
        <div class="text-xs-center">
          <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: "KhaiSauy",
    };
  },
};
</script>
