<template>
  <div>
    <button class="btn-edit" v-on:click="$refs.modal.open()">Edit</button>
    <sweet-modal
      ref="modal"
      :enable-mobile-fullscreen="true"
      overlay-theme="light"
      title="Edit"
    >
      <form>
        <label for="name">Full Name: </label><br />
        <input
          id="name"
          class="name"
          type="text"
          name="name"
          :value="info.Name"
          disabled
        />
        <br />
        <label for="amount">Amount €: </label><br />
        <input
          id="amount"
          class="amount"
          type="number"
          name="amount"
          step="0.01"
          min="0"
          v-model.number="info.Amount"
        />
        <br />
        <label for="description">Descriptions: </label><br />
        <textarea
          id="description"
          class="description"
          name="descriptions"
          v-model="info.Description"
        />
        <br /><br />
        <button slot="button" @click="closeModal" class="cancel-btn">
          Cancel
        </button>
        <button slot="button" @click="update" class="save-btn">Save</button>
      </form>
    </sweet-modal>
  </div>
</template>

<script>
import { SweetModal } from "sweet-modal-vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Modal",
  components: {
    SweetModal
  },
  data() {
    return {
      info: this.transData
    };
  },
  computed: {
    ...mapGetters(["transactions", "userIndex"])
  },
  methods: {
    ...mapActions(["updateTransaction"]),
    closeModal(e) {
      e.preventDefault();
      this.$refs.modal.close();
    },
    update(e) {
      this.closeModal(e);
      if (this.userIndex != null) {
        this.updateTransaction({ id: this.userIndex, data: this.info });
      } else {
        const index = this.transactions.findIndex(element => {
          return element.ID == this.info.ID;
        });
        this.updateTransaction({ id: index, data: this.info });
      }
    }
  },
  props: {
    transData: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  }
};
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
.cancel-btn,
.save-btn,
.delete-btn {
  height: 40px;
  width: 80px;
  margin: 2px;
  color: $white;
  border-radius: 20px;
  border: 1px solid $blue;
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
  font-size: 16px;
  padding-left: 1%;
  border-radius: 20px;
  border: 1px solid $blue;
  outline: none;
}
input {
  height: 34px;
  width: 196px;
}
textarea {
  height: 100px;
  width: 190px;
  padding: 2%;
}
@media only screen and (max-width: 575px) {
  input,
  textarea {
    width: 100%;
  }
}
</style>
