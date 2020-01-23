Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0,
        users: [
            { name: "Charles", age: 15},
            { name: "Bolt", age: 34},
            { name: "Melissa", age: 67},
        ]
    },
    mutations: {
        increment: (state) => {
            return state.count++;
        }
    }
});




