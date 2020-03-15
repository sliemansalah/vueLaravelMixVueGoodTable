<template>
  <button
          class="btn btn-primary custom-btn"
          data-toggle="modal"
          data-target="#m_modal_5"
          @click="add"
        >Add Customer</button>
</template>

<script>
export default {
    methods(){
        this.$emit('add');
    }
}
</script>

<style>

</style>