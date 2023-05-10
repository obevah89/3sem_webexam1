<template>
    <div class="hero__wrapper">
        <a href="#op">
            <button class="hero__button" href="#op">
            <p>К билетам</p>
        </button></a>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .hero__button {
        border: 5px solid #000000;
        background-color: #ff0101;
        border-radius: 30px;
        padding: 0px 40px;
        padding-top: 10px;
        font-weight: 700;
        font-size: 24px;
        position: absolute;
        left: 40%;
        top: 450px;
        transition-duration: 0.7s;
        color: black;
    }

    .hero__button:hover {
        opacity: 0.7;
    }

</style>