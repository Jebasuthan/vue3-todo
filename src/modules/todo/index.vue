<template>
  <div>
    <Welcome />
    <div class="box-container" v-if="showContact">
      <div class="addnewcontact">
        <button type="button" @click="addNewContact">
          Add new Contact
        </button>
      </div>
      <div class="contactlist">
        <h2>List Contacts</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contact, index) in listContacts" :key="index">
              <th scope="row">{{index + 1}}</th>
              <td>{{contact.name}}</td>
              <td>{{contact.mobile}}</td>
              <td>
                <button class="actionBtn" type="button" @click="editContact(contact, index)">Edit</button>
                <button class="actionBtn" type="button" @click="deleteContact(index)">Delete</button>
              </td>
            </tr>
            <tr v-if="listContacts.length === 0">
              <td colspan="4">No Contact Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <form @submit.prevent="onSubmit" novalidate v-else-if="!showContact">
      <div class="box-container">
        <h2 class="heading">Contacts</h2>
        <div class="form-fields">
          <input name="name" v-model="contact.name" type="text" placeholder="Name">
          <small class="error" v-for="(error, index) of v$.contact.name.$errors" :key="index">
            {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
          </small>
        </div>
        <div class="form-fields">
          <input name="mobile" v-model="contact.mobile" type="text" placeholder="Mobile">
          <small class="error" v-for="(error, index) of v$.contact.mobile.$errors" :key="index">
            {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
          </small>
        </div>
        <div class="form-fields">
          <button class="signIn" type="submit">
            Save
          </button>
          <button class="createaccount" type="button" @click="cancel">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Welcome from '@/components/Welcome'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { formatPhoneNumber, capitalizeFirstLetter, lowercaseFirstLetter } from  '@/config/Utils'

export default {
  name: 'todo',
  components: {
    Welcome
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      showContact: true,
      listContacts: [
        {
          name: 'Jeba',
          mobile: '953543545'
        },
        {
          name: 'Suthan',
          mobile: '9234234234'
        }
      ],
      contact: {
        name: '',
        mobile: ''
      }
    }
  },
  validations() {
    return {
      contact: {
        name: { required },
        mobile: { required, minLength: minLength(10) }
      }
    }
  },
  methods: {
    addNewContact() {
      this.showContact = false
    },
    formatModalName(string) {
      return capitalizeFirstLetter(string)
    },
    formatMessage(string) {
      return lowercaseFirstLetter(string)
    },
    formatMobileNumber (phone) {
      this.mobile = formatPhoneNumber(phone)
    },
    onSubmit() {
      this.v$.$touch()
      if (this.v$.$error) return
      if (this.isEdit) {
        this.listContacts[this.editIndex] = this.contact
      } else {
        this.listContacts.push(this.contact)
      }
      this.reset()
    },
    editContact(contact, index) {
      this.isEdit = true
      this.editIndex = index
      this.showContact = false
      this.contact = contact
    },
    deleteContact(index) {
      if (confirm('Are you sure wants to delete?')) {
        this.listContacts.splice(index, 1)
      }
    },
    cancel() {
      this.reset()
    },
    reset() {
      this.isEdit = false
      this.contact = {
        name: '',
        mobile: ''
      }
      this.showContact = true
    }
  }
}
</script>

<style>

</style>
