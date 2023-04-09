<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-center">Welcome to Nevkuro!</h1>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title>
                <v-btn text icon @click="drawer = true"><v-icon>mdi-calendar</v-icon></v-btn>
                <span class="ml-2">日程調整</span>
              </v-card-title>
              <v-card-text>
                <p>日程調整が見れます。</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>