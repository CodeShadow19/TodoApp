<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :modelValue="name"
      @update:modelValue="event => $emit('update:name', event)"
      ref="name"
      :rules="[val => !!val || 'Field is required']"
      label="Task name"
      autofocus
      @focus="selectText"
      class="col">
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('update:name','')"
          name="close"
          class="cursor-pointer"/>
      </template>
    </q-input>

  </div>
</template>

<script>
  import {selectAll} from "../../../../directives/directive-select-all";

  export default {
        name: "ModalTaskName",
        props:['name'],
        data(){
            return{
                count1:0
            }
        },
        directives:{
            selectAll
        },
        methods:{
            selectText() {
                //console.log(this.$refs.name)
                this.$refs.name.select()
            }
            /*onChange(){
                this.count1+=1;
                console.log(this.count1);
                //return count;
                this.$emit('update:count',this.count1);
            },
            onChanged(){
                //console.log(event.target.value);
                this.$emit('update:count2',event.target.value);
            },
            onCall(){
                console.log("Hello");
            }*/
        }
    }
</script>

<style scoped>

</style>
