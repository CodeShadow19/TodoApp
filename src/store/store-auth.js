import { LocalStorage,Loading} from 'quasar'
import { getAuth,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import {showErrorMessage} from "src/function/function-show-error-message";


const state={
  loggedIn:false,
  tabs:"register"
}
const mutations={
  setLoggedIn(state,value){
    state.loggedIn=value
  },
  setTabs(state,payload){
    state.tabs=payload
    LocalStorage.set('tabsKey',state.tabs)
  }
}
const actions={
  registerUser({},payload) {
    //console.log('registerUser',payload)
    Loading.show()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,payload.email, payload.password)
      .then(response => {
        this.$router.push('/auth')
        console.log('response register: ', response)
      })
      .catch(error => {
        //console.log(error.message)
        showErrorMessage(error.message)
      })
  },
  loginUser({},payload) {
    //console.log('registerUser',payload)
    Loading.show()
    const auth = getAuth();
    signInWithEmailAndPassword(auth,payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        //console.log(error.message)
        showErrorMessage(error.message)
      })
  },
  logoutUser(){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Logout Success')
      LocalStorage.set('tabsKey',state.tabs)
    }).catch((error) => {
      console.log('Logout Error')
    });
  }
  ,
  handleOfStateChange({commit}){
    //console.log('handleOfStateChange')
    const auth=getAuth()

    onAuthStateChanged(auth, (user) => {
      Loading.hide()
      if(user){
        commit('setLoggedIn',true)
        LocalStorage.set('loggedIn',true)
        this.$router.push('/')
      }else{
        commit('setLoggedIn',false)
        LocalStorage.set('loggedIn',false)
        this.$router.replace('/auth')
      }
    });
  },
  setTabs({commit},payload){
    commit('setTabs',payload)
  }

}
const getters={

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
