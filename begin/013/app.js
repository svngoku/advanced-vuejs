Vue.component('counter', {
    template: `
        <div>
            <h2>Count: {{ $store.state.count }}</h2>
            <button v-on:click="$store.commit('increment')">You clicked me {{ $store.state.count }} times.</button>
        </div>
    `,
    data: function() {
        return {
            count: 0
        }
    }
});


Vue.component("users", {
    template: `
        <div>
            <h2>Users list</h2>
            <ul v-if="users.length !== 0">
                <li v-for="(u,i) in users">{{ u.name }}</li>
            </ul>
        </div>
    `,
    computed: {
        ...Vuex.mapState({users: 'users'})
    }
})

new Vue({
    el: "#app",
    store,
    template: `
        <div>
            <counter></counter>
            <users></users>
        </div>
    `
});