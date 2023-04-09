
<template>
  <v-container>
    <v-app-bar app fixed dark>
      <v-toolbar-title>ねぶくろ</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row>
    <v-col></v-col>
    </v-row>
    <v-row>
    <v-col></v-col>
    </v-row>
    <v-row>
      <v-col v-if="rows.length">
        <v-col>
          <div>本日は：{{ today }}</div>
        </v-col>
        <v-btn v-for="month in months" :key="month" @click="selectMonth(month)">{{ month }}</v-btn>
        <v-col><hr></v-col>
        <v-data-table
          :headers="filteredHeaders"
          :items="rows"
          :items-per-page="12"
          item-class="highlight-name-column"
        ></v-data-table>
        <v-col></v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { apiKey } from './key.js';
export default {
  data() {
    return {
      rows: [],
      headers: [],
      names: [],
      today: '',
      months: [],
      selectedMonth: '',
      filteredHeaders: [],
    };
  },
  async created() {
    const sheetName = '表示用';
    const range = 'B5:CR13'; // 読み込み範囲を設定
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!${range}?majorDimension=ROWS&key=${apiKey}`,
    );
    const data = await response.json();
    const headers = data.values[0].slice(1);
    const rows = data.values.slice(1);

    this.headers = headers.map((header) => ({ text: header, value: header }));
    this.rows = rows.map((row) => {
      const newRow = { name: row[0] };
      headers.forEach((header, index) => {
        newRow[header] = row[index + 1];
      });
      return newRow;
    });

    // 現在の月を取得し、3月から現在の月までの月を追加
    const nowMonth = new Date();
    const ButtonCurrentMonth = nowMonth.getMonth() + 1;
    // 3月から6月までの月を追加
    for (let i = ButtonCurrentMonth; i <= ButtonCurrentMonth+2; i++) {
      this.months.push(`${i}月`);
    }

    // 現在の月を取得して、その月のデータのみをフィルタリングする
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentMonthHeader = `${currentMonth}月`;

    this.selectMonth(currentMonthHeader);

    // 1列目1行目〜1列目最後の行までの名前を取得
    this.names = data.values;

    // 現在の日付を設定
    const options = { month: 'short', day: 'numeric', weekday: 'short' };
    this.today = now.toLocaleDateString('ja-JP', options);
  },
  methods: {
    selectMonth(month) {
      this.selectedMonth = month;
      this.filteredHeaders = [{ text: 'Name＼Date', value: 'name' }];
      this.headers.forEach((header) => {
        if (header.text.indexOf(month) !== -1) {
          this.filteredHeaders.push(header);
        }
      });
    },
  },
};
</script>

<style>
.highlight-name-column .v-data-table__wrapper tbody td:nth-child(2) {
  background-color: yellow;
}
</style>
