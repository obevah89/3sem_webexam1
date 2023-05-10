<template>
    <div class="article__card">
        <div class="card__img-wrapper"><img  @click="$router.push(`/articles/${article.id}`)" :src="require(`@/assets/${article.preview_image}`)" alt="3123" class="article__img"></div>
        <h2 class="article__name" @click="$router.push(`/articles/${article.id}`)">{{article.name}}</h2>
        <p class="article__description">{{article.shortDesc}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            article: {
                type: Object
            }
        },
    }
</script>

<style scoped>

    .card__img-wrapper {
        height: 300px;
        width: 90%;
        margin: 0;
        margin-bottom: 35px;
    }
    .article__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }



    .article__card {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 450px;
        margin-bottom: 28px;
        /* border-bottom: solid 2px #000; */
        transition-duration: 0.7s;
    }

    .article__name:hover {
        border-bottom: #000 solid 2px;
    }

    .article__name {
        cursor: pointer;
        text-align: center;
    }

    .article__description {
        max-width: 90%;
        text-align: center;
    }

    @media (max-width: 900px) {  
        h2 {
            font-size: 14px;
        }
        p {
            font-size: 10px;
        }

        .card__img-wrapper {
        height: 200px;
        }
    }

    @media (max-width: 1200px) {  
        .card__img-wrapper {
        height: 250px;
        }
    }

    .article__card:hover {
        opacity:0.7;
    }
</style>