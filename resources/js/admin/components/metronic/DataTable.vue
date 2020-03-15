<template>
    <div class="m-portlet m-portlet--mobile">
        <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                       {{title}}
                    </h3>
                </div>
            </div>
            <div class="m-portlet__head-tools">
                <ul class="m-portlet__nav">
                    <li class="m-portlet__nav-item">
                        <button type="button"
                         @click="add"
                         data-toggle="modal" 
                         data-target="#m_modal_5"
                          class="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air"
                            :style="bgStyle">
                            <span>
                                <i class="la la-plus"></i>
                                <span>{{addBtn}}</span>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="m-portlet__body">
            <!--begin: Datatable -->
            <table class="table table-striped- table-bordered table-hover table-checkable" id="m_table_1">
                <thead>
                    <tr>
                        <th v-for="row in rows" :key="row.id">{{ row.value }}</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(r,index) in details" :key="index">
                        <td v-for="(d,index2) in r" :key="index2">{{ d }}</td>
                        <td>
                             <i  @click="edit(details[index],index)" data-toggle="modal" data-target="#m_modal_5"  class="fa fa-pen ml-15"></i>
                             <i @click="del(index)" class="fa fa-trash ml-15"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
props:{
    title:String,
    addBtn:String,
    rows:Array,
    details:Array,
    addBtnBgColor:String,
    addBtnColor:String,
},
mounted(){
    jQuery(document).ready(function () {
       DatatablesAdvancedMultipleControls.init()
    });
},
computed:{
    bgStyle(){
        return {
            backgroundColor: this.addBtnBgColor + ' !important',
            border:'none !important',
            color: this.addBtnColor + ' !important'
        }
    }
},
methods:{
    edit(data,index){
        let d = [];
        d.push(data);
        d.push(index);
        this.$emit('edit',d)
    },
    del(i){
        this.$emit('del',i)
    },
    add(){
        this.$emit('add')
    }
}
}
</script>

<style>
.ml-15{ margin-left: 15px;}
.fa {cursor: pointer;}
.fa-pen:hover{color: green;}
.fa-trash:hover{color: red;}
</style>