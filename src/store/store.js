import { reactive } from 'vue'

const store = reactive({
    username: 'hanier.morales',
    updateUsername(username) {
        this.username = username
    }
})

export default store