<template>
 <div class="product bg-image">
     <div class="row justify-content-center">
        <div class="col-7 bg-dark text-white m-5">
            <div class="row">
                <div class="col-7 d-flex align-items-center">
                    <img class="kfm m-5" src="https://i.ibb.co/ZM6Dbws/Screenshot-20240219-1528592.png" alt="Screenshot" loading="lazy" width="350">
                </div>
                <div class="col-4 d-flex flex-column justify-content-between" id="divide">
                    <div class="d-flex flex-column align-items-start">
                        <h1 class="kmm mt-5">Guluva A3 Portrait</h1>
                        <h2 class="lead">Oil painting</h2> 
                        <span class="lead mb-4">by SledgeTheArtist</span>
                        <p><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i>  <span class="lead">63 Artist Reviews</span></p>
                        <h3 class="product-price">R999.99</h3>
                        <hr class="my-4 w-100 mt-5">
                        <div class="mbc mt-3">
                            <p>Shipping:</p>
                            <p>R149.99</p>
                        </div>
                    </div>
                    <div class="mb-4 d-flex flex-column align-items-start">
                        <button class="Portrait-btn p-2 bg-warning border-0">Download Portrait</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="vue display-4 text-warning">PRODUCT-VIEW</div>
        <div class="col-1"></div>
     </div>
 </div>
</template>

<style scoped>
.vue{
    position: absolute;
    margin-left: 70rem;
    margin-top: 15rem;
    transform: rotate(90deg);   
}
.bg-image{
    background-image: url('https://i.ibb.co/YtRSYhS/istockphoto-538478165-612x612.jpg');
    background-size: cover;
    background-position: center;
    height: auto;
    /* height: 100vh; */
}
/* #divide{
    margin-right: 1px;
    float: left;
} */
.Portrait-btn {
    /* align-self: flex-start; */
    /* position: sticky; */
    /* bottom: 0; */
    /* left: -20px; */
    margin-bottom: 20px;
    border-radius: 10px;
}
.bg-dark{
    border-radius: 20px;
    opacity:  .9;
}

.product {
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>