<template>
 <div class="product mt-5">
     <div class="row justify-content-center">
        <div class="col-8 bg-black text-white">
            <div class="row">
                <div class="col-6 d-flex align-items-center">
                    <img class="kfm m-5" src="https://i.ibb.co/ZM6Dbws/Screenshot-20240219-1528592.png" alt="Screenshot" loading="lazy" width="400">
                </div>
                <div class="col-5 d-flex flex-column justify-content-between" id="divide">
                    <div>
                        <h1 class="kmm mt-5 ">Guluva A3 Portrait</h1>
                        <h2 class="lead mb-5">Oil painting by SledgeTheArtist</h2>
                        <p><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i>  <span class="lead">63 Artist Reviews</span></p>
                        <h3 class="product-price">R999.99</h3>
                        <div class="mbc mt-5">
                            <p>Shipping:</p>
                            <p>R149.99</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <button class="Portrait-btn p-2 bg-warning border-0">Download Portrait</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="display-4 text-warning">PRODUCT-VIEW</div>
        <div class="col-1"></div>
     </div>
 </div>
</template>

<style scoped>
.display-4{
    position: absolute;
    margin-left: 70rem;
    margin-top: 15rem;
    transform: rotate(90deg);
}
.template{
    background-image: url('https://i.ibb.co/rwQpf6G/istockphoto-538478165-612x612.jpg');
}
#divide{
    /* margin-right: 1px; */
}
.Portrait-btn {
    /* align-self: flex-start; */
    /* position: sticky; */
    /* bottom: 0; */
    /* left: -20px; */
    margin-bottom: 20px;
    border-radius: 10px;
}
</style>