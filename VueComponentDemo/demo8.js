Vue.component('add-method',{
    props:['a','b'],
    template:'<div><button v-on:click="add">add</button></div>',
    methods:{
        add:function () {
            var value = 0;
            value = this.a+this.b;
            this.$emit('add_event',{
                result:value
            });
        }
    }
});

var app8 = new Vue({
    el:'#app8',
    data:{
        result:0
    },
    methods: {
        getAddResult:function (pvalue) {
            this.result = pvalue.result
        }
    }
});
