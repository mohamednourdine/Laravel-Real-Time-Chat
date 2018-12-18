<template>
       <div class="message-item">
             <li class="list-group-item" :class="className"><strong><slot></slot></strong></li>
             <small class="badge float-right badge-success"> {{ user }} | {{ time }}</small>
       </div>
</template>

<script>
    export default {

        props:[
            'color',
            'user',
            'time'
        ],

        computed:{
            className(){
                return 'list-group-item-'+this.color;
            }
        },
        
        mounted() {
           
        }
    }
</script>
