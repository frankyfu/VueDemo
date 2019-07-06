Vue.component('today-weather',{
    template:'<div>{{todayWeather}}</div>',
    data:function () {
        return{
            todayWeather:'rain and snow'
        };
    }
});

var app4 = new Vue({
    el:'#app4',
});
