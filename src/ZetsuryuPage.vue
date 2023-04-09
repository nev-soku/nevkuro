<template>
  <v-container>
    <h2>絶竜詩戦争</h2>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">メニュー</v-btn>
      </template>
      <v-list>
        <v-list-item @click="$router.push('/zetsuryu/schedule')">日程調整</v-list-item>
        <v-list-item @click="$router.push('/zetsuryu/strategy')">攻略情報</v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>