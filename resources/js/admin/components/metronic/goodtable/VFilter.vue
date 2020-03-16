<template>
  <div>
      <input v-model="filterString" class="vgt-input w-200" type="text" placeholder="Filter String">
      <br>
      <button @click="filterMe('id')" class="btn btn-success">Filter By ID</button>
      <button @click="filterMe('name')" class="btn btn-success">Filter By Name</button>
      <button @click="filterMe('age')" class="btn btn-success">Filter By Age</button>
      <button @click="filterMe('email')" class="btn btn-success">Filter By Email</button>
      <button @click="filterMe('skills')" class="btn btn-success">Filter By Skills</button>
      <button @click="filterMe('status')" class="btn btn-success">Filter By Status</button>
      <br>
  </div>
</template>

<script>
export default {
    data(){
        return {
             filterString:''
        }
    },
    methods:{
        filterMe(q){
            let data = [];
            data.push({q:q,filterString:this.filterString})
            this.$emit('filter',data)
        }
    }
}
</script>

<style>

</style>