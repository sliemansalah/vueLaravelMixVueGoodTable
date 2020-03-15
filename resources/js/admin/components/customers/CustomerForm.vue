<template>
  <div>
    <div
      class="modal fade"
      id="m_modal_5"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 v-if="customerFormStatus=='add'" class="modal-title" id="exampleModalLabel">New Customer</h5>
            <h5 v-else class="modal-title" id="exampleModalLabel">Edit Customer</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name" class="form-control-label">Name:</label>
                <input v-model="customer.name" type="text" class="form-control" id="name" />
              </div>
              <div class="form-group">
                <label for="age" class="form-control-label">Age:</label>
                <input v-model="customer.age" type="number" class="form-control" id="age" />
              </div>
              <div class="form-group">
                <label for="email" class="form-control-label">Email:</label>
                <input v-model="customer.email" type="text" class="form-control" id="email" />
              </div>

              <div class="form-group">
                <label for="skills" class="form-control-label">Skills:</label>
                <div class="m-checkbox-list">
                  <label class="m-checkbox">
                    <input v-model="customer.skills.angular" type="checkbox" name="checkboxes" /> AngularJS
                    <span></span>
                  </label>
                  <label class="m-checkbox">
                    <input v-model="customer.skills.vue" type="checkbox" name="checkboxes" /> VueJS
                    <span></span>
                  </label>
                  <label class="m-checkbox">
                    <input v-model="customer.skills.react" type="checkbox" name="checkboxes" /> ReactJS
                    <span></span>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label for="skills" class="form-control-label">Enable</label>
                <div class="m-checkbox-list">
                  <label class="m-checkbox">
                    <input v-model="customer.status" type="checkbox" name="status" />
                    <span></span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button v-if="customerFormStatus=='add'" @click="save" data-dismiss="modal" type="button" class="btn btn-primary">Add</button>
            <button v-else @click="update" data-dismiss="modal" type="button" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    customerFormStatus: String
  },
  data() {
    return {
      customer: {
        name: "",
        age: 0,
        email: "",
        skills: {
          angular: false,
          react: false,
          vue: false
        },
        status:false,
      }
    };
  },
  methods: {
    save() {
      this.$emit("save", this.customer);
      this.clear();
    },
    update(){
      this.$emit("update", this.customer);
      this.clear();
    },
    clear() {
      this.customer = {
        name: "",
        age: 0,
        email: "",
        skills: {
          angular: false,
          react: false,
          vue: false
        },
        status:false,
      };
    }
  }
};
</script>

<style>
/* .modal .modal-content {
  width: 700px;
  right: 100px;
} */
</style>