
Vue.component('blog-component', {
    props: ['title', 'content'],
    template: `<div>
                <h2>{{title}}</h2>
                <p>{{content}}</p>
                <button v-on:click="$emit('enlarge-text',0.1)">Agrandar texto</button>
            </div>`

})



Vue.component('alert-box', {
    template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
var app=new Vue({
    el:'#app',
    data:{
        noticias:[
            { id: 0, title: 'Titulo 1', content: 'este es el contenido' },
            { id: 1, title: 'Titulo 2', content: 'estoy modificando los archivos' },
            { id: 2, title: 'Titulo 3', content: 'este es el contenido' },
        ],
        postFontSize:1
    },
    methods:{
        onEnlargeText:function(amount){
            this.postFontSize += amount
        }
    }

})
