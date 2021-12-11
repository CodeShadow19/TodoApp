import { uid } from 'quasar'

const state={
  tasks: [
    {
      id:1,
      name: 'Go To Shop',
      completed: false,
      dueDate: '2019/05/22',
      dueTime: '18:30'
    },
    {
      id: 2,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '14:00'
    },
    {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '16:00'
    }
  ],
  search: '',
  sort:'name',
  /*tasks: {
    'ID1': {
      name: 'Go To Shop',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '14:00'
    },'ID3': {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '16:00'
    }

  }*/
}
const mutations={
  updateTask(state,payload){
    console.log('payload (from mutation): ',payload);
    Object.assign(state.tasks[payload.id],payload.updates)
  },
  deleteTask(state,id){
    console.log('delete id: ',id);
    delete state.tasks[id]
    //state.tasks.splice(id, 1)
  },
  /*addTask(state,payload){
    //state.tasks.push(payload)
    add() state.tasks[(payload.id,payload.task)]

    //console.log('Mutations',payload)
  },*/
  /*addTask(state, payload) {
    state.tasks.push(payload)
  }*/
  addTask(state, payload) {
    //delete(state.tasks, payload.id, payload.task)
    //Object.defineProperty(state.tasks, payload.id, payload.task);
    //Object.assign(state.tasks[payload.id], payload)
    //console.log(payload.id,payload.task);
    //Vue.set(state.tasks, payload.id, payload)
    state.tasks.push(payload)
    //state.items[payload.id] = payload.task
    //state.tasks.splice(payload.id, payload.task);

  },
  setSearch(state, value) {
    state.search=value
  },
  setSort(state,value){
    state.sort=value
  }
}
const actions={
  updateTask({commit},payload){
    console.log('Update Task Action');
    //console.log('payload',payload);
    commit('updateTask',payload)
  },
  deleteTask({commit},id){
    commit('deleteTask',id)
  },
  /*addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  },*/
 addTask({ commit }, payload) {
    commit('addTask',payload)
   // console.log(payload)
  },
  setSearch({commit},value){
    commit('setSearch',value);
  },
  setSort({commit},value){
    commit('setSort',value)
  }
}
const getters={
  tasksSorted: (state) => {
    let tasksSorted = {}
    let  keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a,b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase()

      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })

      //console.log(keysOrdered)

    keysOrdered.forEach(function(key,i){
      tasksSorted[i]= state.tasks[key]
      //console.log(tasksSorted[key])
    })
    //console.log(tasksSorted);

    return tasksSorted
  },
  tasksFiltered: (state,getters) => {
    let tasksShorted=state.tasks,
    //let tasksShorted=getters.tasksSorted,
        tasksFiltered = {}
    if (state.search) {
      Object.keys(tasksShorted).forEach(function(i) {
        let task = tasksShorted[i],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase()
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[i] = task
        }
      })
      return tasksFiltered
    }
    return tasksShorted
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
