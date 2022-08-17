import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
        username: 'Hanier.Morales'
    }
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split().join(c)
    }
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username
    }
  }
})

export default store