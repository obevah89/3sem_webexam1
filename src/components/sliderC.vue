<template>
    <div>
        <v-row class="d-flex justify-center slider mt-10">
            <v-col cols="12" md="6">
                <v-carousel class="mb-14" cycle height="400" hide-delimiter-background show-arrows="hover">
                    <v-carousel-item v-for="(article, i) in articleSlider" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <div class="d-flex fill-height justify-center align-center">
                                <div class="text-h2 ">
                                    {{ article.name }}
                                </div>
                            </div>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        computed: mapGetters(["articleSlider", 'colors']),
        methods: mapActions(['fetchPosts']),
        async mounted() {
            this.fetchPosts()
        }
    }
</script>

<style scoped>

</style>