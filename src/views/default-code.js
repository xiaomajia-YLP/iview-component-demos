// src/views/default-code.js
const code =
`<template>
    <div>
        <input v-model="message">
        {{ message }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: '789'
            }
        },
        methods: {
          mounted(){
            console.log(123123123123)
          }
        }
    }
</script>`;

export default code;