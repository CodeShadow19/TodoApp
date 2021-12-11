<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
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
        props:['task','id'],
        data(){
            return{
                taskToSubmit:{}
            }
        },
        methods:{
            ...mapActions('tasks',['updateTask']),
            submitForm(){
                console.log('Update Form!');
                this.updateTask({
                    id: this.id,
                    updates: this.taskToSubmit
                })
            }
        },
        components:{
            'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
            'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
            'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
            'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
            'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
        },
        mounted(){
            this.taskToSubmit=Object.assign({},this.task)
        }
    }
</script>

<style scoped>

</style>
