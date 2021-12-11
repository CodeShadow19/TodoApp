<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import {mapActions} from "vuex";

export default defineComponent({
  methods:{
    ...mapActions('settings',['getSettings']),
    ...mapActions('auth',['handleOfStateChange'])
  },
  mounted() {
      this.getSettings()
      this.handleOfStateChange()
  }
})
</script>
