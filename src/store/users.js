import axios from 'axios'

export default {
    state: {
        users: null,
        usersLoading: false,
        usersError: false
    },
    mutations: {
        showUsersLoader(state) {
            state.usersLoading = true
        },
        hideUsersLoader(state) {
            state.usersLoading = false
        },
        catchUsersErrors(state, payload) {
            state.usersError = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
    },
    actions: {
        async getUsers({ commit }) {
            try {
                commit('showUsersLoader')

                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                
                if (response.statusText === 'OK') {
                    commit('setUsers', response.data)
                }
            } catch (err) {
                commit('catchUsersErrors', err)
            } finally {
                commit('hideUsersLoader')
            }
        }
    }
}