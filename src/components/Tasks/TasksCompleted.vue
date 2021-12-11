<template>
  <div :class="{'q-mt-lg' :! settings.showTaskInOneList}">
    <list-header
      v-if="!settings.showTaskInOneList"
      bgColor="bg-green-4">Completed</list-header>
    <q-list
      separator
      bordered>
      <tasks
        v-for="(task,key) in tasksCompleted"
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
        name: "TasksCompleted",
        props:['tasksCompleted'],
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
