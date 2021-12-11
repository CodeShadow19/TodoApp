<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-list
        class="q-mb-md"
        bordered
        padding>
        <q-item-label header>Settings</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Show 12 hour time format</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-toggle color="blue" v-model="show12HourTimeFormat" val="battery" />
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Show tasks in one list</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-toggle color="blue" v-model="showTaskInOneList " val="battery" />
          </q-item-section>
        </q-item>
      </q-list>


      <q-list
        bordered
        padding>
        <q-item-label header>More</q-item-label>
        <q-item
          to="/settings/help"
          tag="label"
          v-ripple>
          <q-item-section>
            <q-item-label>Help</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-icon name="chevron_right"/>
          </q-item-section>
        </q-item>

        <q-item
          @click="visitOurWebsite"
          tag="label"
          v-ripple>
          <q-item-section>
            <q-item-label>Visit Our Website</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-icon name="chevron_right"/>
          </q-item-section>
        </q-item>

        <q-item
          @click="emailUs"
          tag="label"
          v-ripple>
          <q-item-section>
            <q-item-label>Email Us</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-icon name="chevron_right"/>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import { openURL } from 'quasar'

    export default {
        computed:{
            ...mapGetters('settings',['settings']),
            show12HourTimeFormat:{
                get(){
                    return this.settings.show12HourTimeFormat
                },
                set(value){
                    this.setShow12HourTimeFormat(value)
                }
            },
            showTaskInOneList:{
                get(){
                    return this.settings.showTaskInOneList
                },
                set(value){
                    this.setShowTaskInOneList(value)
                }
            }
        },
        methods:{
            ...mapActions('settings',['setShow12HourTimeFormat','setShowTaskInOneList']),
            visitOurWebsite(){
                openURL('http://www.google.com')
            },
            emailUs(){
                window.location.href='mailto:alhasanofficial.asib@gmail.com?subject=Awesome Todo FromBack'
            }
        }
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
</style>
