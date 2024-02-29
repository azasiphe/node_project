<template>
  <div class="container-fluid about">
    <div class="row mt-5 justify-content-center">
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="Abt-img">
          <img src="https://i.ibb.co/7br35D2/Screenshot-2024-02-28-135701-removebg-preview.png" alt="about-us-img">
        </div>
      </div>
      <div class="col-lg-5 col-md-8 col-sm-12 lead">
        <p>
          Welcome to GAaNA's Art Gallery, a vibrant space that emerged in 2022, born from the visionary minds of Asisipho Gcusa and Azasipe Ndoro. Named in honor of their profound commitment to art and community, GAaNA's Art Gallery stands as a beacon of inspiration within their township environment. 
        </p>
        <p>
          With a passion for making art accessible, Asisipho and Azasipe have fostered a thriving partnership, dedicated to showcasing affordable and impactful works that resonate with the spirit of their community. From paintings to sculptures, each piece tells a unique story, inviting visitors to explore the rich tapestry of creativity and culture. Step inside and experience the beauty, diversity, and shared vision that define GAaNA's Art Gallery.
        </p>
      </div>
      <div class="col-lg-1 d-lg-block d-none"></div>
      <div class="col-lg-2 col-md-4 col-sm-6">
        <img src="https://i.ibb.co/XbnpFfK/Screenshot-2024-02-26-143808.png" alt="Screenshot-2024-02-26-143808" loading="lazy" height="500" width="300">
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-lg- col-md-4">
        <div class="display-4">Founders:</div>
      </div>
        <div class="col-lg-3 col-md-8 col-sm-12">
          <div class="row">
            <div class="col">
              <div class="container">
                <img src="https://i.ibb.co/bzBXw6q/IMG-20240210-WA0028.jpg" alt="sefie-logo" loading="lazy" height="100" class="img-pic">
                <div class="text-section">
                  <h2>Azasiphe Ndoro</h2>
                  <p>Azasipe have fostered a thriving partnership, dedicated to showcasing affordable and impactful works that resonate with the spirit of their community.</p>
                </div>
                <img src="https://i.ibb.co/bzBXw6q/IMG-20240210-WA0028.jpg" alt="selfie-profile" loading="lazy" height="150" class="img-picture">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-8 col-sm-12">
          <div class="row">
            <div class="col">
              <div class="container">
                <img src="https://i.ibb.co/KqGZYH2/122078978-371053247376812-3536115294280722888-n-removebg-preview.png" alt="sefie-logo" loading="lazy" height="100" class="img-pic">
                <div class="text-section">
                  <h2>Asisipho Gcusa</h2>
                  <p>Azasipe have fostered a thriving partnership, dedicated to showcasing affordable and impactful works that resonate with the spirit of their community.</p>
                </div>
                <img src="https://i.ibb.co/KqGZYH2/122078978-371053247376812-3536115294280722888-n-removebg-preview.png" alt="selfie-profile" loading="lazy" height="150" class="img-picture">
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 20px;
}  
.col-5{
  margin-top: 9rem;
}
.Abt-img{
  /* position: absolute;
  margin-left: -8rem; */
  margin-top: 5rem;
}
.container{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  transition: all 0.5s ease-out;
}
.img-pic{
  width: 150px;
  height: 150px;
  cursor: pointer;
  object-fit: cover;
  filter: drop-shadow(0 0 5px purple);
  transition: all 0.5s ease-out;
}
.container:hover .img-pic{
  transform: scale(0);
}
.container:hover{
  width: 350px;
  height: 160px;
  border-radius: 15px;
  background: #111;
  border: 1px solid red;
}
.text-section{
  position: absolute;
  top: 10px;
  left: 20px;
  width: 220px;
  opacity: 0;
  color: #fff;
  transition: all 0.5s ease-out;
}
.container:hover .text-section{
  opacity: 1;
}
.img-picture{
  position: absolute;
  top: -20px;
  right: 30px;
  width: 80px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  transform: rotate(10deg);
  transition: all 0.5s ease-out;
}
.container:hover .img-picture{
  opacity: 1;
}
</style>