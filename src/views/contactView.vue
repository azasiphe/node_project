<template>
    <div class="aboutus">
        <div class="row justify-content-center">
            <div class="col-8">
                <h1 class="display-2"><img class="Contact-img" src="https://i.ibb.co/GxLs0XZ/pngtree-yellow-brush-stock-clipart-png-image-8940369-removebg-preview.png" alt="background-image" loading="lazy" width="200"><span class="n1">C</span><span class="n2">O</span><span class="n3">N</span><span class="n4">T</span><span class="n5">A</span><span class="n6">C</span><span class="n7">T</span><span class="n8"> US</span></h1>
                <div class="inputNames">
                      <div class="form-floating m-5">
                        <input type="text" id="bname" name="bname" class="form-control" placeholder="e.g Sipho Gcusa" required>
                        <label class="text-danger" for="bname">e.g Sipho Gcusa</label>
                      </div>
                      <div class="form-floating m-5">
                        <input type="email" id="lname" name="lname" class="form-control" placeholder="e.g gcusaaa@gmail.com" required>
                        <label class="text-body-secondary" for="lname">e.g gcusaaa@gmail.com</label>
                      </div>
                      <div class="form-floating m-5">
                        <input type="text" id="sname" name="sname" class="form-control py-5" placeholder="Ask your question" required>
                        <label class="text-danger" for="sname">Ask your question</label>
                        <button class="mt-2 border-0 bg-danger text-dark p-2">submit</button>
                      </div>
                    </div>
                    <div class="container-lg m-1">
                        <div class="Card row  bg-dark text-white m-5">
                            <div class="col-4"><i class="bi bi-telephone"></i> Contact
                                <p>069-292-9578</p></div>
                            <div class="col-4"><i class="bi bi-envelope"></i> Email
                                <p>gcusaaa@gmail.com</p></div>
                            <div class="col-4"><i class="bi bi-geo-alt"></i> Location
                                <p>SOMERSET CROSSING, STRAND, 7140</p>
                                </div>
                        </div>
                    </div>
            </div>
            <div class="col-4">
                <img src="https://i.ibb.co/vHWKQbj/Screenshot-2024-02-26-123707.png" alt="STA" loading="lazy">
            </div>
        </div>
    </div>
</template>

<style scoped>
.Card, .border-0{
    border-radius: 10px;
}
.n1, .n2, .n3, .n4, .n5, .n6, .n7, .n8{
    animation: lighting 3s linear infinite;
}
@keyframes lighting {  
	0%{
        text-shadow: none;
    }
	90%{
        text-shadow: none;
    }
	100%{
        text-shadow: 0 0 7px purple, 0 0 5px purple;
    }
}
.n1{
    animation-delay: 0.1s;
}
.n2{
    animation-delay: 0.2s;
}
.n3{
    animation-delay: 0.3s;
}
.n4{
    animation-delay: 0.4s;
}
.n5{
    animation-delay: 0.5s;
}
.n6{
    animation-delay: 0.6s;
}
.n7{
    animation-delay: 0.7s;
}
.n8{
    animation-delay: 0.8s;
}
</style>