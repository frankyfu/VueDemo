//局部注册
var WeatherComponent = {
    template : '<div>今天天气:多云转晴</div>'
};

var myApp = new Vue({
    el:'#app2',
    components:{
        'my-weather':WeatherComponent
    }
});
