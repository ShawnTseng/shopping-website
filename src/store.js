import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const LESSONS_URL = 'https://api.hiskio.com/v1/professions'

const store = new Vuex.Store({
    state: {
        lessons: [],
        cart: []
    },
    getters: {
        lessonsInCart: state => (
            state.cart.length
        ),
        priceInCart: state => (
            state.cart.reduce((acc) => {
                // return acc + lesson.price
                return acc + 1000
            }, 0)
        ),
        isLessonInCart: state => lesson => (
            state.cart.findIndex(({ id }) => id === lesson.id) !== -1
        )
    },
    mutations: {
        setLessons(state, lessons) {
            state.lessons = lessons;
        },
        addToCart(state, lesson) {
            state.cart.push(lesson)
        }
    },
    actions: {
        fetchLessons({ commit }) {
            fetch(LESSONS_URL)
                .then(response => response.json())
                .then(response => {
                    commit('setLessons', response)
                })
        }
    }
})

export default store; 