<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name v-model:name="taskToSubmit.name"></modal-task-name>
        <modal-due-date v-model:dueDate="taskToSubmit.dueDate"></modal-due-date>
        <modal-due-time v-if="taskToSubmit.dueDate" v-model:dueTime="taskToSubmit.dueTime"></modal-due-time>


      </q-card-section>
      <modal-buttons></modal-buttons>

      <!--<pre>{{taskToSubmit}}</pre>-->
    </q-form>



  </q-card>
</template>

<script>
    import {mapActions} from "vuex";
    import { uid } from 'quasar';

    export default {
        name: "AddTask",
        data(){
            return{
                taskToSubmit:{
                    id:uid(),
                    name: '',
                    completed: false,
                    dueDate: '',
                    dueTime: ''
                }
            }
        },
        methods:{
            ...mapActions('tasks',['addTask']),
            submitForm(){
                console.log('Submit Form!');
                this.addTask(this.taskToSubmit)
            }
        },
        components:{
            'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
            'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
            'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
            'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
            'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
        }
    }
</script>

<style scoped>

</style>
