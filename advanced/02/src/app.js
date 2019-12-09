Vue.component('task', {
    template: `<div><slot></slot></div>`
});


Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks" :key="task.id">
                {{ task.description  }}
            </task>
        </div>
    `,
    data() {
        return {
            tasks: [
                {id: 1,description: 'Ta da', comppleted: true},
                {id: 2,description: 'Custom app', comppleted: false},
            ]
        }
    }
})



new Vue({
    el: "#root"
})