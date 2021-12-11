<template>
 <div>
  <list-header
    v-if="!settings.showTaskInOneList"
    bgColor="bg-orange-4">Todo</list-header>
   <q-list
     v-if="Object.keys(tasksTodo).length"
     separator
     bordered>
     <tasks
       v-for="(task,key) in tasksTodo"
       :key="key"
       :task="task"
       :id="key"
     ></tasks>
   </q-list>
 </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "TaskTodo",
        props:['tasksTodo'],
        components:{
            'tasks':require('components/Tasks/Task.vue').default,
            'list-header':require('components/Shared/ListHeader.vue').default
        },
        computed:{
            ...mapGetters('settings',['settings'])
        }
    }
</script>

<style scoped>

</style>
