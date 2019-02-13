<template>
  <div>
    <button class="btn-edit" v-on:click="$refs.modal.open()">Edit</button>
    <sweet-modal ref="modal" :enable-mobile-fullscreen="true" overlay-theme="light" title="Edit">
      <form>
        First name:<br>
        <input type="text" name="firstname" :value="info.fullName" disabled>
        <br>
        Amount €:<br>
        <input type="number" name="amount" min="0" v-model="info.amount">
        <br>
        Descriptions:<br>
        <textarea name="descriptions" v-model="info.description"/>
        <br><br>
        <button slot="button" @click="closeModal" class="cancel-btn">Cancel</button>
        <button slot="button" @click="closeModal" class="delete-btn">Delete</button>
        <button slot="button" @click="closeModal" class="save-btn">Save</button>
      </form>
    </sweet-modal>
  </div>
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
  name: 'Modal',
  components: {
    SweetModal,
    SweetModalTab
  },
  data() {
    return {
      info: this.transaction
    }
  },
  methods: {
    closeModal(e) {
      e.preventDefault();
      this.$refs.modal.close();
    },
    updateData() {

    }
  },
  props: {
    transaction: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #0191a9;
$white: #fff;
.btn-edit {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: $blue;
  color: $white;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
}
.cancel-btn, .save-btn, .delete-btn {
  margin: 2px;
  padding: 2%;
  color: $white;
  border-radius: 20px;
  cursor: pointer;
  float: right;
  font-size: 1rem;
  outline: none;
}
.delete-btn {
  background: red;
}
.save-btn {
  background: $blue;
}
.cancel-btn { 
  background: rgb(28, 168, 75);
}
input,
textarea {
  padding: 1%;
  border: 1px solid $blue;
  font-size: 16px;
  width: 196px;
}

</style>
