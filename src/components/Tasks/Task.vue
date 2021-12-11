<template>
  <q-item
    @click="updateTask({id:id,updates:{completed :! task.completed}})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple>
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
      <!--<q-checkbox
        :value="task.completed"
        class="no-pointer-events"/>-->
    </q-item-section>
    <q-item-section>
      <q-item-label
        :class="{'text-strike':task.completed}"
        v-html="$options.filters.searchHighlight(task.name, search)"></q-item-label>
    </q-item-section>
    <q-item-section side top>
      <div class="row">
        <div class="column justify-center">
          <q-icon
            size="18px"
            class="q-mr-xs"
            name="event"/>
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption>
            {{ $options.filters.niceDate(task.dueDate)}}
          </q-item-label>
          <q-item-label
            class="row justify-end"
            caption>
            <small>{{taskDueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section>
      <div class="row">
        <q-btn
          @click.stop="showEditTask=true"
          flat
          round
          dense
          color="red"
          icon="edit"/>
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete"/>
      </div>
      <!--<q-btn label="Confirm" color="primary" @click="confirm" />-->
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task
        :task="task"
        :id="id"
        @close="showEditTask=false"></edit-task>
    </q-dialog>

  </q-item>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex'
    import { date } from 'quasar'
    export default {
        name: "Task",
        props: ['task','id'],
        data(){
          return{
              showEditTask:false
          }
        },
        computed: {
            ...mapState('tasks', ['search']),
            ...mapGetters('settings', ['settings']),
            taskDueTime() {
                if (this.settings.show12HourTimeFormat) {
                    return date.formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')
                }
                return this.task.dueTime
            }
        },
        methods:{
            ...mapActions('tasks',['updateTask','deleteTask']),
            promptToDelete (id) {
                this.$q.dialog({
                    title: 'Confirm',
                    message: 'Really delete?',
                    cancel: true,
                    persistent: true
                }).onOk(() => {
                    this.deleteTask(id);
                })
            },
            showEditTaskModal(){
                this.showEditTask=true;
            }
        },
        components:{
            'edit-task':require('components/Tasks/Modals/EditTask.vue').default
        },
        filters:{
            searchHighlight(value, search) {
                if (search) {
                    let searchRegExp = new RegExp(search, 'ig')
                    return value.replace(searchRegExp, (match) => {
                        return '<span class="bg-yellow-6">' + match + '</span>'
                    })
                }
                return value
            },
            niceDate(value) {
                return date.formatDate(value, 'MMM D')
            }
        }

    }
</script>

<style scoped>

</style>
