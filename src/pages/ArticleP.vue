<template>
    <div class="article">
        <div class="article__wrapper">
            <h1>{{article.name}}</h1>
            <div class="article__block">
                <img :src="require(`@/assets/${article.preview_image}`)" alt="#" class="article__img">
                <div class="article__text">
                    <p class="article__desc">{{article.desc}}</p>
                    <p class="article__date"><strong>{{article.date}}</strong></p>
                </div>
            </div>
            <formRequest class="disn"></formRequest>
            <hr>
            <div class="comment__wrapper">
                <div class="comment__block">
                    <h2 class="comment__heading">Комментарии</h2>
                    <div class="comment__item" v-for="comment in comments" :key="comment.id" >
                        <p class="comment__id"><strong>{{comment.user}}</strong></p>
                        <p class="comment__text">{{comment.text}}</p>
                        <hr>
                    </div>
                </div>
            </div>
            <formComment class="disn"></formComment>
            
        </div>
        
    </div>
</template>

<script>
    import articles from "@/../public/articles.json";
    import formRequest from "@/components/formRequest";
    import formComment from "@/components/formComment";
    export default {
        components: {
            formRequest,
            formComment,
        },
        data() {
            return {
                article:articles.filter(t => t.id == this.$route.params.id)[0],
                comments: [
                    {id:1, user:'Иван', text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quasi nemo perferendis ab cumque, mollitia temporibus blanditiis inventore nesciunt ullam?"},
                    {id:2, user:'Александр', text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. "}
                ],
            }
        },
    }

</script>

<style  scoped>
    .article__wrapper {
        max-width:1400px;
        margin: 28px auto;
        padding: 28px;
        background-color: #fff;
        min-height: calc(100vh - 130px);
    }


    h1 {
        text-align: center;
        margin-bottom: 28px;
    }

    .article__date {
        text-align: end;
    }

    .article__img {
        border-radius: 10px;
    }

    .article__block {
        display: flex;
        flex-direction: row;
        column-gap: 28px;
        margin-bottom: 28px;
    }


    .comment__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .comment__block {
        display: flex;
        flex-direction: column;
        row-gap: 28px;
        max-width: 70%;
    }

    .comment__heading {
        margin-top: 28px;
    }

    @media (max-width: 1000px) {  
        .article__block {
            display:flex;
            flex-direction: column;
        }
    }  

    @media print {
        img, .disn {
            display: none;
        }
    }
</style>