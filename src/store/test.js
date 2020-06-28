import { getList } from '../api/server'

const test = {
  namespaced: true,
  state: {
    list: ''
  },
  actions: {
    fatchList ({ commit, dispatch }, payload) {
      console.log(payload, dispatch)
      getList().then(res => {
        commit('setList', res.list)
        // dispatch('fatchList')
      })
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  }
}

export default test
