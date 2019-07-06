Vue.component('nba-all-star',{
   props:['c','pf'],
   template:'<div>' +
       'C:{{c}}<br>' +
       'PF:{{pf}}<br>' +
       'SF:<slot name="sf"></slot><br>' +
       'SG:<slot name="sg"></slot><br>' +
       'PG:<slot name="pg"></slot></div>'
});

var app9 = new Vue({
    el:'#app9',
})
