<template>
    <div class="header">
        <div class="header__wrapper">
            <router-link class="header__link-logo" to="/"><img class="header__logo" :src="require(`@/assets/logo1.png`)" alt="logo"></router-link>
            <inputSearch class="mt-6"></inputSearch>
            <nav class="header__nav">
                <ul class="header__list">
                    <li class="header__item">
                        <router-link class="header__link" to="/">Главная</router-link>
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/articles">Новости</router-link>
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/gallery">Галерея</router-link>
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/profile">Профиль</router-link>
                    </li>
                    <li class="header__item">
                        <router-link class="header__link" to="/signIn">Войти</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    
</template>

<script>
import inputSearch from '@/components/inputSearch';

    export default {
    components: {
        inputSearch
    }
}
</script>

<style scoped>


    
    .header__logo {
        width: 80px;
    }

    .header__wrapper {
        max-width: 1400px;
        margin: 0 auto;
        padding: 28px;
        padding-bottom: 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header__list {
        display: flex;
        flex-direction: row;
        column-gap: 46px;
        list-style: none;
    }

    nav {
        display: flex;
        align-items: center;
    }

    .header__link {
        text-decoration: none;
        color: #000;
    }

    @media print {
        .header {
            display: none;
        }
    }
</style>