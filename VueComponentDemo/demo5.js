Vue.component('test-result',{
    props:['score'],
    template:'<div>{{score}} is {{testResult}}</div>',
    computed:{
        testResult:function () {
            var strResult="";
            if(this.score<60){
                strResult = "C";
            }
            else if(this.score<90){
                strResult = "B";
            }
            else if(this.score<=100){
                strResult = "A";
            }
            return strResult;
        }
    }
});

var app5 = new Vue({
    el:'#app5',
});
