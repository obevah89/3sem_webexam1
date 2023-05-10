<template>
    <div class="container ">
        <h2 class="text-center mt-4 mb-11">Оставьте заявку, и мы Вам перезвоним</h2>
        <div class="row justify-content-center" >
            <div class="col-6 ">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Ваше имя</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Номер телефона</label>
                        <input type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Согласен на обработку персональных данных</label>
                    </div>
                    <div class="row mt-7 justify-content-center">
                        <button type="submit" class="btn col-6">Заказать обратный звонок</button>
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