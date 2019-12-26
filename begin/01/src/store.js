const store = Vue.observable({
    X: 1
});

const mutations = {
    setX(value) {
        store.X = value;
    },
    // other functions can be added
};


