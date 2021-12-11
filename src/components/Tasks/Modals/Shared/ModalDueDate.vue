<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      label="Due Date"
      :modelValue="dueDate"
      @update:modelValue="event => $emit('update:dueDate', event)"
      mask="date"
      :rules="[val => !!val || 'Field is required']">
      <template v-slot:append>
        <q-icon
        v-if="dueDate"
        name="close"
        @click="$emit('update:dueDate','')"
        class="cursor-pointer"/>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
              :modelValue="dueDate"
              @update:modelValue="event => $emit('update:dueDate', event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
    export default {
        name: "ModalDueDate",
        props:['dueDate'],
        methods:{

        }
    }
</script>

<style scoped>

</style>
