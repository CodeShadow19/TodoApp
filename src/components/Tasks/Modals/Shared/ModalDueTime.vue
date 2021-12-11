<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      label="Due Times"
      :modelValue="dueTime"
      @update:modelValue="event => $emit('update:dueTime', event)"
      :rules="[val => !!val || 'Field is required']">
      <template v-slot:append>
        <q-icon
          v-if="dueTime"
          name="close"
          @click="clearTime"
          class="cursor-pointer"/>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time
              :modelValue="dueTime"
              @update:modelValue="event => $emit('update:dueTime', event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
    export default {
        name: "ModalDueTime",
        props:['dueTime'],
        methods:{
            clearTime () {
                let value = ""
                this.$emit('update:dueTime', value)
            }
        }
    }
</script>

<style scoped>

</style>
