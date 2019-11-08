# Watchers  & Computed props in Vuejs

## Watchers

A watcher is a special feature that allows us to spy on one property of the component state, and run a function when that property value changes.

```js

new Vue({
    el: "#root",
    data: {
        teachers: ["Nelson", "Bart"]
    },
    methods: {
        addMarcusTeachers: function() {
            this.teachers.push("Marcus")
        }
    },
    watch: {
        teachers: function() {
            console.log(this.teachers)
        }
    }
})

```

## Computed

A computed property is a feature that help us to avoid any `complex logic` on VueJs instance or Code.