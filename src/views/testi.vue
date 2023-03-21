<template>
    <div>
        <div class="thelanding">
         <div class="text">
           <h2>TESTIMONIAL</h2>
           <div class="btns">
            <router-link to="/" class="btn">
              home
            </router-link>
            <button class="btn btn-light">testimonial</button>
           </div>
          </div>
        </div>
        <div class="testimonial">
     <div class="image">
      <img src="../assets/img/landing2.jpg" alt="">
     </div>
     <div class="box">
      <div class="textt">
       <span>TESTIMONIAL</span>
       <h3>OUR CLIENT SAY</h3>
      </div>
       <div class="mainbox">
       

        <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :modules="modules"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="testi">
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Harum nesciunt recusandae esse earum ipsum. 
          Odio soluta laborum, voluptatum, blanditiis quia 
          officia, unde hic libero impedit labore 
          consectetur? Pariatur, quasi aliquid!</h5>
           <div class="client">
            <img src="../assets/img/kk.jpg" alt="">
            <div class="text">
             <h3>khaled sawada</h3>
             <p>web developer</p>
            </div>
           </div>
         </div>
    </swiper-slide>
    <swiper-slide>
      <div class="testi">
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Harum nesciunt recusandae esse earum ipsum. 
          Odio soluta laborum, voluptatum, blanditiis quia 
          officia, unde hic libero impedit labore 
          consectetur? Pariatur, quasi aliquid!</h5>
           <div class="client">
            <img src="../assets/img/kk.jpg" alt="">
            <div class="text">
             <h3>khaled sawada</h3>
             <p>web developer</p>
            </div>
           </div>
         </div>
    </swiper-slide>
    <swiper-slide>
      <div class="testi">
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Harum nesciunt recusandae esse earum ipsum. 
          Odio soluta laborum, voluptatum, blanditiis quia 
          officia, unde hic libero impedit labore 
          consectetur? Pariatur, quasi aliquid!</h5>
           <div class="client">
            <img src="../assets/img/kk.jpg" alt="">
            <div class="text">
             <h3>khaled sawada</h3>
             <p>web developer</p>
            </div>
           </div>
         </div>
    </swiper-slide>
    <swiper-slide>
      <div class="testi">
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Harum nesciunt recusandae esse earum ipsum. 
          Odio soluta laborum, voluptatum, blanditiis quia 
          officia, unde hic libero impedit labore 
          consectetur? Pariatur, quasi aliquid!</h5>
           <div class="client">
            <img src="../assets/img/kk.jpg" alt="">
            <div class="text">
             <h3>khaled sawada</h3>
             <p>web developer</p>
            </div>
           </div>
         </div>
    </swiper-slide>
    <swiper-slide>
      <div class="testi">
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Harum nesciunt recusandae esse earum ipsum. 
          Odio soluta laborum, voluptatum, blanditiis quia 
          officia, unde hic libero impedit labore 
          consectetur? Pariatur, quasi aliquid!</h5>
           <div class="client">
            <img src="../assets/img/kk.jpg" alt="">
            <div class="text">
             <h3>khaled sawada</h3>
             <p>web developer</p>
            </div>
           </div>
         </div>
    </swiper-slide>
 
  </swiper>
        
       </div>
     </div>
    </div>
    </div>
</template>

<script>

import {ref} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-creative';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    setup(){
     
        
        return{
            modules: [Autoplay , Pagination , Navigation],
        }
    }
}
</script>

<style lang="scss">


</style>