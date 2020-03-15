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
    This will show up on the top right of the table. 
  </div>
  <div slot="table-actions-bottom">
    This will show up on the bottom of the table. 
  </div>
   <div slot="emptystate">
    This will show up when there are no rows
  </div>

  <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field == 'age'">
      <span style="font-weight: bold; color: blue;">{{props.row.age}}</span> 
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
  </template>
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

  </div>
</template>
<script>
export default {
  data(){
    return {
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
          field: 'skills',
        },
        {
          label: 'Actions',
          field: 'actions',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, email: 'soso@msn.com',skills: 'angular' },
        { id:2, name:"Jane", age: 24, email: 'soso2@msn.com', skills: 'angular/vue' },
        { id:2, name:"Jane", age: 24, email: 'soso2@msn.com', skills: 'angular/vue' },
        { id:2, name:"Jane", age: 24, email: 'soso2@msn.com', skills: 'angular/vue' },
        { id:2, name:"Jane", age: 24, email: 'soso2@msn.com', skills: 'angular/vue' },
        { id:2, name:"Jane", age: 24, email: 'soso2@msn.com', skills: 'angular/vue' },
        { id:2, name:"Jane", age: 24, email: 'soso2@msn.com', skills: 'angular/vue' },
        { id:2, name:"Jane", age: 24, email: 'soso2@msn.com', skills: 'angular/vue' },
      ],
    };
  },
  methods:{
  //   rowStyleClassFn(row) {
  //   return row.age > 18 ? 'green' : 'red';
  // },
  // mySearchFn(row, col, cellValue, searchTerm){
  //   return cellValue === 'my value';
  // },
  }
};
</script>

<style>
</style>
