<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No tasks to do today!
    <template v-slot:action>
      <q-btn
        @click="$emit('showAddTasks')"
        flat
        color="primary"
        label="Add task" />
    </template>
  </q-banner>
</template>

<script>
    export default {
        name: "NoTasks",
    }
</script>

<style scoped>

</style>
