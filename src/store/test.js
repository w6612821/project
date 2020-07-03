import { getList } from '../api/index'

const test = {
  namespaced: true,
  state: {
    list: ''
  },
  actions: {
    fatchList ({ commit, dispatch }, payload) {
      console.log(payload, dispatch)
      getList().then(res => {
        commit('setList', res.data)
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
