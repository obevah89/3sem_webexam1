<template>
    <div class="main">
        <div class="main__wrapper">
            <h1 class="main__heading">Продажа билетов</h1>
            <hr>
            <div class="main__hero hero">
                <!-- <img class="hero__img" :src="require(`@/assets/hero.jpg`)" alt="hero-img"> -->
                <ActionButton></ActionButton>
            </div>
            <h1 class="text-center mt-8" id="op">Лучшие цены на 2023 год</h1>
            <hr>
            <SortComponent></SortComponent>
            <div class="atricles__card-wrapper" id="op">
                
                <div class="articles__list" v-for="article in allArticles" :key="article.id">
                    <articleCard class="articles__item" :article="article">
                    </articleCard>
                </div>
            </div>

        </div>
        
    </div>
</template>

<script>
import ActionButton from '@/components/ActionButton';
import articleCard from "@/components/articleCard";
import SortComponent from "@/components/SortComponent";
    import { mapGetters, mapActions } from "vuex";
    export default {
            components: {
                ActionButton,
                articleCard,
                SortComponent,
            },
            computed: mapGetters(["allArticles"]),
            methods: mapActions(['fetchPosts']),
            async mounted() {
                this.fetchPosts()
            }
    }
</script>

<style scoped>

    .hero__img {
        width: 100%;
    }
    .hero   {
        position:relative;
        height:800px;
        background-image: url("~@/assets/hero.jpg");
    }
    .main {
        background-color: #edeef0;
    }

    .main__wrapper {
        max-width: 1400px;
        margin: 0 auto;
        background-color: #fff;
        margin-top: 35px;
        min-height: calc(100vh - 130px);
    }

    .main__heading {
        text-align: center;
        margin-bottom: 28px;
        padding-top: 28px;
    }

    .slider {
        margin-top: 28px;
    }

    .text-h2 {
        padding: 28px;
        text-align: center;
    }

    .atricles__card-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        column-gap: 28px;
        margin-top: 38px;
    }

    

    @media (max-width: 900px) {  
        .atricles__card-wrapper {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
    } 
    
    @media (max-width: 600px) {  
        .atricles__card-wrapper {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
            }
    }  

    @media print {
        .hero, .header {
            display: none;
        }
    }
</style>

