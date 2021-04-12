import { setStore } from '@/config/Utils'

const state = () => ({
  loginedUser: ''
})

const getters = {
  isAuthenticated: (state) => {
    return state.loginedUser
  }
}

const actions = {
  getUser({commit}) {
    commit('getLoginedUser')
  },
  userLogin({ commit }, user) {
    commit('setUserDetails', user)
  },
  userLogout({ commit }) {
    commit('userLogout')
  }
}

const mutations = {
  getLoginedUser(state) {
    state.loginedUser
  },
  setUserDetails(state, user) {
    state.loginedUser = user
    setStore('user', user)
  },
  userLogout(state) {
    state.loginedUser = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
