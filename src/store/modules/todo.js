import { getStore, setStore } from '@/config/Utils'

const state = () => ({
  listContacts: getStore('contact') ? getStore('contact') : []
})

const getters = {
  getListContact: (state) => {
    return state.listContacts
  }
}

const actions = {
  getListContact ({ commit }) {
    commit('getListContact')
  },
  addContact({ commit }, contact) {
    commit('addContact', contact)
  },
  editContact({ commit }, contact) {
    commit('editContact', contact)
  },
  deleteContact({ commit }, index) {
    commit('deleteContact', index)
  }
}

const mutations = {
  getListContact(state) {
    state.listContacts
  },
  addContact(state, contact) {
    state.listContacts.push(contact)
    setStore('contact', state.listContacts)
  },
  editContact(state, contact) {
    const userContact = state.listContacts.find(item => item.name === contact.name)
    userContact.name = contact.name
    userContact.mobile = contact.mobile
    setStore('contact', state.listContacts)
  },
  deleteContact(state, index) {
    state.listContacts.splice(index, 1)
    setStore('contact', state.listContacts)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
