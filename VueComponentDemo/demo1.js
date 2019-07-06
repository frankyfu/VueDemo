Vue.component('button-counter',{
    data:function () {
        return {
            count:0
        }
    },
    template:'<button v-on:click="count++">{{count}}times</button>'
});

new Vue ({
    el : '#app1'
})
