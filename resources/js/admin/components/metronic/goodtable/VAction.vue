<template>
 <span>
    <i
    @click="edit(vprops.row)"
    data-toggle="modal"
    data-target="#m_modal_5"
    class="fa fa-pen ml-15"
    ></i>
    <i @click="del(vprops.row)"
     class="fa fa-trash ml-15"></i>
</span>
</template>

<script>
export default {
    props:["vprops"],
    methods:{
        del(row){
            this.$emit('del',row)
        },
        edit(row){
            this.$emit('edit',row)
        }
    },
}
</script>

<style>

</style>