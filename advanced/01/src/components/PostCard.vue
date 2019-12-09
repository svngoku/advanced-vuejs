<template>
    <div class="wrapper">
        <Search />
         <div class="card" v-for="post in filteredList" :key="post">
             <a @href="post.link" target="_blank">
                 <img @src="post.img" />
                 <small>
                     posted by :{{ post.author }}
                 </small>
             </a>
        </div>
    </div>
</template>


<script>
import Search from './components/Search.vue';

export default {
    name: 'PostCard',
    props: ['post', 'search'],
    computed: {
        filterList() {
            return this.filterList(function(post) {
                return post.title.toUpperCase().includes(this.search.toLowerCase())
            });
        },
    },
}
</script>