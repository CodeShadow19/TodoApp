import { boot } from 'quasar/wrappers'
import { LocalStorage } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
//export default boot(async (/* { app, router, ... } */) => {
  /*router.beforeEach((to,from,next)=>{
    let loggedIn=localStorage.getItem('loggedIn')
    if(!loggedIn && to.path!=='/auth'){
      next('/auth')
    }else{
      next()
    }
  })*/
//})

/*export default ({ router })=>{
  router.beforeEach((to,from,next)=>{
    let loggedIn = LocalStorage.getItem('loggedIn')
    if(!loggedIn && to.path!=='/auth'){
      next('/auth')
    }else{
      next()
    }
    console.log('to: ',to)
    console.log('from: ',from)
  })
}*/
export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn')
    let tabsKey = LocalStorage.getItem('tabsKey')
    //alert(tabsKey)
    if (!loggedIn && to.path !== '/auth' && tabsKey!=='login') {
      next('/auth')
    }
    else {
      next()
    }
  })
}
