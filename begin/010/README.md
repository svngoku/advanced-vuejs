# Filters

Vue.js allows us to define filters that can be used to apply common text formatting. Filters are usable in two places: `mustache interpolations` and `v-bind` expressions. Filters should be appended to the end of the JavaScript expression, denoted by the “pipe” symbol:

```html

<!-- i mustaches -->
{{ message | capitalize }}

<!-- in v-bind -->
<div v-bind:id="rawId | formatId"></div>

```

We can define local filter in a component.

```js

filters: {
    capitalize: function(value) {
        if(!value) return ''
        value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}
```

And globally it's look like this

```js
Vue.filter('capitalize', function(value){
    if(!value) return ''
    value.toString();
     return value.charAt(0).toUpperCase() + value.slice(1)
})

```


Now let's write this !!!! 
