<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>

    <p v-if="search && !Object.keys(tasksTodo).length
      && !Object.keys(tasksCompleted).length">
      No search results
    </p>
     <!-- <q-scroll-area class="q-scroll-area-tasks">
    <no-tasks
      @showAddTask="showAddTask=true"
      v-if="!Object.keys(tasksTodo).length && !search"></no-tasks>
    <tasks-todo
      v-if="Object.keys(tasksTodo).length"
      :tasksTodo="tasksTodo"></tasks-todo>
    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"></tasks-completed>
      </q-scroll-area>-->
    <q-scroll-area class="q-scroll-area-tasks">
      <no-tasks
        v-if="!Object.keys(tasksTodo).length && !search
        && !settings.showTaskInOneList"
        @showAddTasks="showAddTask=true"></no-tasks>

      <tasks-todo
        v-if="Object.keys(tasksTodo).length"
        :tasksTodo="tasksTodo" />

      <tasks-completed
        v-if="Object.keys(tasksCompleted).length"
        :tasksCompleted="tasksCompleted"
        class="q-mb-xl" />
    </q-scroll-area>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask=true"
        round
        color="primary"
        size="22px"
        icon="add"
      />
    </div>
    </div>

    <q-dialog v-model="showAddTask">
        <add-task></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
    import {mapGetters, mapState} from "vuex";
    export default {
        data(){
            return{
                showAddTask:false
            }
        },
        computed: {
            ...mapGetters('tasks',['tasksTodo','tasksCompleted'],),
            ...mapState('tasks',['search']),
            ...mapGetters('settings',['settings']),
            /*tasks(){
                return this.$store.getters['tasks/tasksTodo']
            }*/
        },
        components: {
            'add-task':require('components/Tasks/Modals/AddTask.vue').default,
            'tasks-todo':require('components/Tasks/TasksTodo.vue').default,
            'tasks-completed':require('components/Tasks/TasksCompleted.vue').default,
            'no-tasks':require('components/Tasks/NoTasks.vue').default,
            'search':require('components/Tasks/Tools/Search.vue').default,
            'sort':require('components/Tasks/Tools/Sort.vue').default,
        },
        /*mounted(){
            this.$global.$on('showAddTask', ()=>{
                this.showAddTask=true
            })
        }*/
    }
</script>
<style>
  .border-gray{
    border: 1px solid grey;
  }
  input, button {
    font-size: 23px;
  }
  .error{
    color: red;
    background: pink;
  }
  .q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
  }
</style>
