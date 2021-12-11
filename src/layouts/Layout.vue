<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo App
        </q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"/>

        <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"/>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
          :key="nav.label" />
        <!--<q-route-tab
          to="/settings"
          icon="settings"
          label="Settings" />
        <q-tab
          icon="list"
          label="Todo" />-->
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      class="bg-primary"
    >
      <q-list dark>
        <q-item
          v-for="nav in navs"
          :to="nav.to"
          :key="nav.label"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section
            avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
    import {mapActions, mapState} from "vuex";

export default({
  name: 'MainLayout',
  data(){
      return{
          leftDrawerOpen: this.$q.platform.is.desktop,
          navs: [
              {
                  label: 'Todo',
                  icon: 'list',
                  to: '/'
              },
              {
                  label: 'Settings',
                  icon: 'settings',
                  to: '/settings'
              },
              {
                  label: 'About',
                  icon: 'info',
                  to: '/about'
              }
          ]
      }
  },
  computed:{
      ...mapState('auth',['loggedIn'])
  },
   methods:{
      ...mapActions('auth',['logoutUser'])
   }
})
</script>
<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
  .q-drawer .q-router-link--exact-active{
    color:white !important;
  }
</style>
