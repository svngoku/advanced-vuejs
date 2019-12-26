<template>
    <div>
        <p>A: {{ X }}</p>
        <button @click="setX(X + 1)">Increment</button>
        <button @click="setX(X - 1)">Decrement</button>
        <hr>
        <componentB />
    </div>
</template>


<script>
import { store, mutations} from "./store";

const SecondComponent = {
    template: `<p> B: {{ X }} </p>`,
    computed: {
        X() {
            return store.X;
        }
    },
};


export default {
    components: {
        componentB : SecondComponent
    },
    computed: {
        X() {
            return store.X;
        }
    },
    methods: {
        setX: mutations.setX
    },
}
</script>