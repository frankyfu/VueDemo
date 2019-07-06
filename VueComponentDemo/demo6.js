Vue.component('say-hello',{
    props:['pname'],
    template:'<div>hello,<strong>{{pname}}</strong>!</div>'
});

var app6 =new Vue({
    el:'#app6',
    data:{
        name:'frank'
    }
});
