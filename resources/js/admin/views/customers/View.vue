<template>
  <div>
	<h3 class="m-subheader__title ">Dashboard</h3>
  <vue-good-table
      :columns="columns"
      :rows="rows"
        styleClass="vgt-table striped bordered condensed"
      :search-options="{
    enabled: true,
    trigger: 'enter',
    skipDiacritics: true,
    placeholder: 'Search this table',
  }"
  :sort-options="{
    enabled: true,
   initialSortBy: [
      {field: 'name', type: 'asc'},
      {field: 'age', type: 'desc'}
    ],
  }"
  :pagination-options="{
    enabled: true,
    mode: 'pages',
    perPage: 5,
    position: 'down',
    perPageDropdown: [1, 5, 10],
    dropdownAllowAll: false,
    setCurrentPage: 1,
    nextLabel: 'Next',
    prevLabel: 'Prev',
    rowsPerPageLabel: 'Rows per page',
    ofLabel: 'Of',
    pageLabel: 'Page', // for 'pages' mode
    allLabel: 'All',
  }"
      >
      <div slot="table-actions">
        <button
         class="btn btn-primary custom-btn"
          data-toggle="modal" 
          data-target="#m_modal_5">
          Add Customer
        </button>
  </div>

  <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'actions'">
      <i  @click="edit(props.row)" data-toggle="modal" data-target="#m_modal_5"  class="fa fa-pen ml-15"></i>
       <i @click="del(props.index)" class="fa fa-trash ml-15"></i>
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
  </template>
   <div slot="emptystate">
    <span class="text-danger">No data here</span>
  </div>

  <!-- <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'age'">
      <span style="font-weight: bold; color: blue;">{{props.row.age}}</span> 
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
  </template> -->
      </vue-good-table>
        
       <!-- max-height="200px" -->
       <!-- :fixed-header="true" -->
       <!-- :line-numbers="true" -->
       <!-- :row-style-class="rowStyleClassFn" -->
       <!-- :rtl="true" -->
        <!-- mode="remote"  
        Set mode=remote to allow sorting/filtering etc to be powered by server side instead of client side.
        skipDiacritics => for best search 
            searchFn: mySearchFn,
    externalQuery: searchQuery
    asc - desc

       initialSortBy: {field: 'name', type: 'asc'}  

        pagination mode -> records , pages
        themes: nocturnal, black-rhino
        -->

      <customer-form 
                  ref="customerForm" 
                  :customerFormStatus="customerFormStatus"
                  @save="addNewCustomer"
                  @update="updateCustomer"></customer-form>
  </div>
</template>
<script>
import axios from 'axios'
var _ = require('lodash');
export default {
  data(){
    return {
      customerFormStatus:'add',
      customers:[],
      customerID:null,
      local:false,
      searchQuery:'',
       columns: [
        {
          label: 'ID',
          field: 'id',
          type: 'number',
        },
        {
          label: 'Name',
          field: 'name',
        },
         {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'Skills',
          field: 'jsonSkills',
        },
        {
          label: 'Actions',
          field: 'actions',
        },
      ],
      rows: [],
    };
  },
  methods:{
     getCustomers(){
      axios.get('/api/customers').then(res=> {
      this.customers =  res.data.data
      this.customers.forEach(data => {
        delete data.skills;
        delete data.created_at;
        delete data.updated_at;
        data.jsonSkills = this.skillsFilter(data.jsonSkills);
      });
      this.rows = this.customers
    })
    },
     edit(res){
    this.customerFormStatus = 'edit'
    this.$refs.customerForm.clear()
    this.fillCustomer(res);
    this.customerID = res.id;
    },
    fillCustomer(res){
    this.$refs.customerForm.customer.name = res.name
    this.$refs.customerForm.customer.email = res.email
    this.$refs.customerForm.customer.age = res.age
    if(res.jsonSkills.includes("angular")){
          this.$refs.customerForm.customer.skills.angular = true
    }
    if(res.jsonSkills.includes("vue")){
          this.$refs.customerForm.customer.skills.vue = true
    }
    if(res.jsonSkills.includes("react")){
          this.$refs.customerForm.customer.skills.react = true
    }
    },
    del(index){
      let id  = this.customers[index].id;
       swal({
                title: "Delete Customer",
                text: "Are you need delete customer",
                icon: "success",
                confirmButtonText: "<span>Yes</span>",
                showCancelButton: !0,
                cancelButtonText: "<span>No, thanks</span>",
            }).then(result => {
              if(result.value){
                this.customers.splice(index,1)
                axios.delete('/api/customers/'+id).then(res=> {
                this.details = this.customers
                swal("Customer Remove", "Customer was removed successfully!", "info")
                 this.$store.dispatch('initCustomers',this.customers)
                });
              }
            })
    },
    add(){
     this.customerID = null;
     this.customerFormStatus = 'add'
     this.$refs.customerForm.clear()
    },
    addNewCustomer(data){
       let customer_add = {
          name:data.name,
          age:data.age,
          email:data.email,
          skills:data.skills
        };
        this.customers.push(customer_add)
         axios.post(`/api/customers`, customer_add)
    .then(response => {
          swal("Add Customer!", "Customer Added Successfully!", "success")
          this.getCustomers();
    })
         
    },
    updateCustomer(data){
      console.log(this.customerID);
        let customer_add = {
          name:data.name,
          age:data.age,
          email:data.email,
          skills:data.skills
        };

          axios.put(`/api/customers/`+this.customerID, customer_add)
    .then(response => {
          swal("Update Customer!", "Customer Updated Successfully!", "success")
          this.getCustomers();
    })
    },
     skillsFilter(skills){
      let data="";
  _.forEach(skills, function(value,key) {
    if(value){
      data+=key +"/"
    }
});
data=data.substring(0,data.length -1)
    return data
    }
  },
  mounted(){
    this.getCustomers()
  }
};
</script>

<style>
.custom-btn{
  padding: 7px 22px;
}
</style>
