(function(){"use strict";var e={675:function(e,t,n){var r=n(144),s=n(7179),o=n(3381),a=n(7024),i=n(1819),c=n(1923),u=n(7894),l=n(2515),h=n(3845),d=function(){var e=this,t=e._self._c;return t(i.Z,[t(s.Z,{attrs:{app:"",fixed:"",dark:""}},[t(h.qW,[e._v("ねぶくろ")]),t(l.Z)],1),t(u.Z,[t(a.Z)],1),t(u.Z,[t(a.Z)],1),t(u.Z,[e.rows.length?t(a.Z,[t(a.Z,[t("div",[e._v("本日は："+e._s(e.today))])]),e._l(e.months,(function(n){return t(o.Z,{key:n,on:{click:function(t){return e.selectMonth(n)}}},[e._v(e._s(n))])})),t(a.Z,[t("hr")]),t(c.Z,{attrs:{headers:e.filteredHeaders,items:e.rows,"items-per-page":12,"item-class":"highlight-name-column"}}),t(a.Z)],2):e._e()],1)],1)},f=[];n(7658);const m="AIzaSyD2riV4l532OYCLSF7cnqpgFS1aKImdWuU";var v={data(){return{rows:[],headers:[],names:[],today:"",months:[],selectedMonth:"",filteredHeaders:[]}},async created(){const e="表示用",t="B5:CR13",n=await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${e}!${t}?majorDimension=ROWS&key=${m}`),r=await n.json(),s=r.values[0].slice(1),o=r.values.slice(1);this.headers=s.map((e=>({text:e,value:e}))),this.rows=o.map((e=>{const t={name:e[0]};return s.forEach(((n,r)=>{t[n]=e[r+1]})),t}));const a=new Date,i=a.getMonth()+1;for(let d=i;d<=i+2;d++)this.months.push(`${d}月`);const c=new Date,u=c.getMonth()+1,l=`${u}月`;this.selectMonth(l),this.names=r.values;const h={month:"short",day:"numeric",weekday:"short"};this.today=c.toLocaleDateString("ja-JP",h)},methods:{selectMonth(e){this.selectedMonth=e,this.filteredHeaders=[{text:"Name＼Date",value:"name"}],this.headers.forEach((t=>{-1!==t.text.indexOf(e)&&this.filteredHeaders.push(t)}))}}},p=v,Z=n(1001),y=(0,Z.Z)(p,d,f,!1,null,null,null),g=y.exports,w=n(8345),_=n(3816),k=n(5255),x=n(9088),b=function(){var e=this,t=e._self._c;return t(i.Z,{attrs:{fluid:""}},[t(u.Z,{attrs:{justify:"center"}},[t(a.Z,{attrs:{cols:"12",md:"8"}},[t("h1",{staticClass:"text-center"},[e._v("Welcome to Nevkuro!")]),t(u.Z,{attrs:{justify:"center"}},[t(a.Z,{attrs:{cols:"12",md:"8"}},[t(_.Z,[t(k.EB,[t(o.Z,{attrs:{text:"",icon:""},on:{click:function(t){e.drawer=!0}}},[t(x.Z,[e._v("mdi-calendar")])],1),t("span",{staticClass:"ml-2"},[e._v("日程調整")])],1),t(k.ZB,[t("p",[e._v("日程調整が見れます。")])])],1)],1)],1)],1)],1)],1)},O=[],M={name:"HomeView",data(){return{drawer:!1}}},S=M,j=(0,Z.Z)(S,b,O,!1,null,null,null),P=j.exports,D=function(){var e=this,t=e._self._c;return t(i.Z,[t(u.Z,[e.rows.length?t(a.Z,[t(a.Z,[t("div",[e._v("本日は："+e._s(e.today))])]),e._l(e.months,(function(n){return t(o.Z,{key:n,on:{click:function(t){return e.selectMonth(n)}}},[e._v(e._s(n))])})),t(a.Z,[t("hr")]),t(c.Z,{attrs:{headers:e.filteredHeaders,items:e.rows,"items-per-page":12,"item-class":"highlight-name-column"}}),t(a.Z),t(o.Z,{on:{click:function(t){return e.$router.push("/")}}},[e._v("戻る")])],2):e._e()],1)],1)},$=[],H={data(){return{rows:[],headers:[],names:[],today:"",months:[],selectedMonth:"",filteredHeaders:[]}},async created(){const e="1gfigGaZxrdqiTk9oJriRDH4Q0ZxknzZunMGI4SH-EzU",t="表示用",n="B5:CR13",r=await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${e}/values/${t}!${n}?majorDimension=ROWS&key=AIzaSyD2riV4l532OYCLSF7cnqpgFS1aKImdWuU`),s=await r.json(),o=s.values[0].slice(1),a=s.values.slice(1);this.headers=o.map((e=>({text:e,value:e}))),this.rows=a.map((e=>{const t={name:e[0]};return o.forEach(((n,r)=>{t[n]=e[r+1]})),t}));const i=new Date,c=i.getMonth()+1;for(let f=c;f<=c+2;f++)this.months.push(`${f}月`);const u=new Date,l=u.getMonth()+1,h=`${l}月`;this.selectMonth(h),this.names=s.values;const d={month:"short",day:"numeric",weekday:"short"};this.today=u.toLocaleDateString("ja-JP",d)},methods:{selectMonth(e){this.selectedMonth=e,this.filteredHeaders=[{text:"Name＼Date",value:"name"}],this.headers.forEach((t=>{-1!==t.text.indexOf(e)&&this.filteredHeaders.push(t)}))}}},C=H,E=(0,Z.Z)(C,D,$,!1,null,null,null),z=E.exports;r.ZP.use(w.ZP);const I=[{path:"/",name:"Home",component:P},{path:"/z_r1_tyousei",name:"z_r1_schedule",component:z}],T=new w.ZP({mode:"history",base:"",routes:I});var W=T,F=n(629);r.ZP.use(F.ZP);var R=new F.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),q=n(8986);r.ZP.use(q.Z);var B=new q.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:W,store:R,vuetify:B,render:e=>e(g)}).$mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],o=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(l--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,s,o]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,a=r[0],i=r[1],c=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var l=c(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunknevkuro"]=self["webpackChunknevkuro"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(675)}));r=n.O(r)})();
//# sourceMappingURL=app.e6bc6a11.js.map