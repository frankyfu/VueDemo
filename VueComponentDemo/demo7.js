Vue.component('show-information',{
    props:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            validator:function(value){
                return value>=0 && value<=120;
            }
        },
        detail:{
            type:Object,
            default:function () {
                return {
                    address:'USA',
                    language:'English',
                }
            }
        }
    },
    template:'<div>name:{{this.name}}<br>'
        +'age:{{this.age}}<br>'
        +'address:{{this.detail.address}}<br>'
        +'language:{{this.detail.language}}</div>'
});

var app7 = new Vue({
    el:'#app7',
});
