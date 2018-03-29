var obj={
    foo:'bar'
}
// freeze previene que propiedades existentes sean cambiadas
Object.freeze(obj) 
var vm = new Vue({
    el:'#app',
    data:obj
})


var data={a:1}
var vm2=new Vue({
    el:'#app2',
    data:data
})

vm2.$watch('a',function(newValue,oldValue){
    // callback when 'vm2.a' changes
})


var app3= new Vue({
    el:'#app3',
    data:{a:1},
    created: function(){
        console.log('a is:'+this.a)
    },
    updated:function(){
        console.log('now, a is: '+this.a)
    }
    // also exist 'mounted' and 'destroyed' hooks
})
app3.$watch('a',function(newValue,oldValue){
    console.log("el valor anterior de a: "+oldValue+", el nuevo valor de a: "+newValue)
})


var app4= new Vue({
    el:'#app4',
    data:{
        firstname:'francisco',
        lastname:'gacitua'
    },
    computed:{
        fullName:{
            get:function(){
                return this.firstname + ' ' + this.lastname
            },
            set:function(newValue){
                var names=newValue.split(' ')
                this.firstname= names[0]
                this.lastname = names[names.length-1]
            }
        }
    }
})
Vue.component('my-component', {
    props: ['obj'],
    template: '<p class="foo bar">{{obj.text}}</p>'
})



var app5= new Vue({
    el:'#app5',
    data:{
        isActive:true,
        hasError:false,
        show:true,
        names:[
            { id: 0, text: 'francisco',active:false },
            { id: 1, text: 'javier', active: true },
            { id: 2, text: 'andres', active: false },
        ],
        object:{
            firstName:'francisco',
            lastName:'gacitua',
            age:26
        },
        numbers:[1,2,3,4,5,6,7],
        news:[
            { id: 0, title: 'titulo 1', content: 'asdasd' },
            { id: 1, title: 'titulo 2', content: 'asdaasdasd' },
            { id: 2, title: 'titulo 3', content: 'asdaeeeeesd'}
        ]
    },
    computed:{
        evenNumbers:function () {
            return this.numbers.filter(function (number) {
                return number %2===0
            })
        }
    }
})
// Añade propiedades reactivas a objetos
Vue.set(app5.object,'email','fcogacituam@gmail.com')

// Para agregar varias propiedades reactivas a un object
app5.object= Object.assign({},app5.object,{
    pais:'chile',
    ciudad:'santiago'
})


Vue.component('news-component',{
    props:['title','content'],
    template:'<div><h2>{{title}}</h2><p>{{content}}</p></div>'
})

Vue.component('count-component',{
    data:function(){
        return {
            count:0
        }
    },
    template:'<button @click="count++">You clicked me {{count}} times</button>'
})