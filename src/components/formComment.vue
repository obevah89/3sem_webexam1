<template>
    <div class="container ">
        <h2 class="text-center mt-4 mb-11">Оставьте комментарий</h2>
        <div class="row justify-content-center" >
            <div class="col-6 ">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Ваше имя</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Комментарий</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="row mt-7 justify-content-center">
                        <button type="submit" class="btn  col-6">Отправить</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
button{
    background-color: #eaff01;
}
</style>