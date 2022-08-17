import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
    state() {
      return {
        username: 'hanier.morales'
      }
    },
    getters: {},
    mutations: {
      [COMMIT_UPDATE_USERNAME](state, username) {
        state.username = username
      }
    },
    actions: {
      async updateUsername({ commit, state }, username) {
        console.log('update username action!', state.username, username)
        const user = await getUser(1)
        console.log(user)
        commit(COMMIT_UPDATE_USERNAME, user.username)
      }
    },
  }

  export default module