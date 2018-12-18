
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


import Toaster from 'v-toaster'
 
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
 
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('message', require('./components/message.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',

    data:{
        typing:'',
        message:'',
        chat:{
            message:[],
            user:[],
            color:[],
            time:[]
        },

        numberOfUsers:0,
        user:''
    },

    watch:{
        message(){
            Echo.private('chat')
            .whisper('typing', {
                name: this.message
            });
        }
    },

    methods:{
        send(){
            if (this.message.length == 0) {
                return;
            }
          
            this.chat.message.push(this.message);
            this.chat.user.push('You');
            this.chat.color.push('success');
            this.chat.time.push(this.getTime());
           
            axios.post('/send', {
               message : this.message,
               chat:this.chat
              })
              .then(response => {
                this.message = '';
              })
              .catch(error => {
                console.log(error);
              });
           
        },

        getTime(){
    		let time = new Date();
    		return time.getHours()+':'+time.getMinutes();
        },  
        
        getOldMessages(){
            axios.post('/getOldMessage')
                  .then(response => {
                    console.log(response);
                    if (response.data != '') {
                        this.chat = response.data;
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
        },

        deleteSession(){
            axios.post('/deleteSession')
            .then(response=> this.$toaster.success('Chat history is deleted') );
        }
                   
        
    },

    mounted(){
       
        this.getOldMessages();
    	Echo.private('chat')
    	    .listen('ChatEvent', (e) => {
    	    	this.chat.message.push(e.message);
    	    	this.chat.user.push(e.user.name);
    	    	this.chat.color.push('warning');
    	    	this.chat.time.push(this.getTime());
                axios.post('/saveToSession',{
                    chat : this.chat
                  })
                    .then(response => {
                        console.log('i save it ');
                    })
                    .catch(error => {
                    console.log(error);
                    });
            // console.log(e);
    	    })
    	    .listenForWhisper('typing', (e) => {
    	    	if (e.name != '') {
    	        	this.typing = 'typing...'
    	    	}else{
    	    		this.typing = ''
    	    	}
            });
            
            Echo.join(`chat`)
            .here((users) => {
                this.numberOfUsers = users.length;
              
            })
            .joining((users) => {
                this.numberOfUsers += 1;
                console.log(users);
                this.$toaster.success(users.name+' has joined the chat room.');
            })
            .leaving((users) => {
                this.numberOfUsers -= 1;
                this.$toaster.warning(users.name+' has left the chat room.');
            });
    	   
    }
});



