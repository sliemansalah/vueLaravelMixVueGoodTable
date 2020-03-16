<template>
  <div>
       <h4>Custom Filters</h4>
       <!-- Status Filter --> 
      <div class="row">
          <div class="w-200 mr-15">
        <select v-model="statusString" name="status" class="form-control m-input">
            <option value="">Select Status</option>
            <option value="1">Enabled</option>
            <option value="0">Disabled</option>
        </select>
        </div>
            <button :disabled="statusString?false:true" @click="filterStatus()" class="btn btn-danger">Filter By Status</button>
      </div>
      <br>
      <!-- Skills Filter --> 
      <div class="row">
            <div class="m-checkbox-list mr-15">
                  <label class="m-checkbox">
                    <input v-model="skills.angular" type="checkbox" name="checkboxes" /> AngularJS
                    <span></span>
                  </label>
                  <label class="m-checkbox">
                    <input v-model="skills.vue" type="checkbox" name="checkboxes" /> VueJS
                    <span></span>
                  </label>
                  <label class="m-checkbox">
                    <input v-model="skills.react" type="checkbox" name="checkboxes" /> ReactJS
                    <span></span>
                  </label>
        </div>
            <button @click="filterSkills()" class="btn btn-danger skillStyle">Filter By Skills</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            statusString:'',
            skills:{
                angular:false,
                react:false,
                vue:false
            }
        }
    },
    methods:{
        filterStatus(){
            let data = [];
            data.push({q:'status',filterString:this.statusString})
            this.$emit('filter',data)
        },
        filterSkills(){
            let skillsFilter= this.skillsFilter(this.skills)
            let data = [];
            data.push({q:'jsonSkills',filterString:skillsFilter})
            this.$emit('filter',data)
        },
        skillsFilter(skills) {
      let data = "";
      _.forEach(skills, function(value, key) {
        if (value) {
          data += key + "/";
        }
      });
      data = data.substring(0, data.length - 1);
      return data;
    }
    }
}
</script>

<style>
.mr-15{
    margin-right: 15px;
}
.skillStyle{
    height:40px;
    margin-top:20px;
}
</style>