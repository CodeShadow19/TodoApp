<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-2">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary"/>
        </template>
        {{ $options.filters.titleCase(tab)}} to access your Todos anywhere!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
      v-model="formData.email"
      :rules="[val=>inValidEmailAddress(val) || 'Please enter valid email']"
      outlined
      ref="email"
      class="col"
      label="Email"
      stack-label/>
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        :rules="[val=>val.length>=6 || 'Please enter at least' +
         ' 6 characters.']"
        lazy-rules
        ref="password"
        type="password"
        outlined
        class="col"
        label="password"
        stack-label/>
    </div>
    <div class="row">
      <q-space/>
      <q-btn
      color="primary"
      :label="tab"
      type="submit"/>
    </div>
  </form>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Register",
        props:['tab'],
        data(){
            return{
               formData:{
                   email:'',
                   password:''
               }
            }
        },
        methods:{
            ...mapActions('auth',['registerUser','loginUser','setTabs']),
            submitForm(){
                this.$refs.email.validate()
                this.$refs.password.validate()
                if(!this.$refs.email.hasError && !this.$refs.password.harError){
                    if(this.tab=='login'){
                        //console.log('Login the user')
                        this.loginUser(this.formData)
                        this.setTabs(this.tab)
                    }else{
                        this.registerUser(this.formData)
                        this.setTabs(this.tab)
                    }
                }
            },
            inValidEmailAddress(email){
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(String(email).toLowerCase());
            }
        },
        filters: {
            titleCase(value) {
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style scoped>

</style>
