<template>
    <div class="search-wrapper">
         <div>
            <input type="text" v-model="seach" placeholder="search" />
        </div>
    </div>
</template>


<script>
export default {
    name: 'Search',
    props: {
        search: {
            type: String
        }
    }
}
</script>