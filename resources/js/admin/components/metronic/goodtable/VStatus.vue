<template>
<div>
   <div v-if="vprops.row.status=='1'">
        <span class="text-success">Enabled</span>
   </div>
   <div v-else>
        <span class="text-danger">Disabled</span>
   </div>
 
</div>
</template>

<script>
export default {
    props:["vprops"],
}
</script>

<style>

</style>