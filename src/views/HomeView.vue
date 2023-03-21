<template>
  
  <div>
  <div class="landing">
    <swiper
    :grabCursor="true"
    :effect="'creative'"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
   
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :modules="modules"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    class="mySwiper"
  >
  
    <swiper-slide class="img1">
     <div class="box">
      <div class="text">
       <span>BEST GYM CENTER</span>
       <h3>BUILD YOUR BODY STRONG WITH SAWADA'S GYM</h3>
       <div class="btns">
        <button class="btn">join us</button>
        <router-link to="/contact" class="btn btn-light ">
        contact us 
        </router-link>       
        </div> 
      </div>
     </div>
    </swiper-slide>
    <swiper-slide class="img2">
     <div class="box">
      <div class="text">
       <span>BEST GYM CENTER</span>
       <h3>GROW YOUR STRENGTH WITH OUR TRAINERS</h3>
       <div class="btns">
        <button class="btn ">join us</button>
        <router-link to="/contact" class="btn btn-light ">
          contact us 
        </router-link>
       </div> 
      </div>
     </div>
    </swiper-slide>
    <swiper-slide class="img3">
     <div class=" container box">
      <div class="text">
       <span>BEST GYM CENTER</span>
       <h3>BUILD YOUR BODY STRONG WITH SAWADA'S GYM</h3>
       <div class="btns">
        <button class="btn">join us</button>
        <router-link to="/contact" class="btn btn-light ">
          contact us
        </router-link>
       </div> 
      </div>
     </div>
    </swiper-slide>
    <swiper-slide class="img4">
     <div class="box">
      <div class="text">
       <span>BEST GYM CENTER</span>
       <h3>GROW YOUR STRENGTH WITH OUR TRAINERS</h3>
       <div class="btns">
        <button class="btn">join us</button>
        <router-link to="/contact" class="btn btn-light ">
        contact us 
        </router-link>
       
       </div> 
      </div>
     </div>
    </swiper-slide>
  </swiper>
  </div>

  <div class="about">
   <div class="image">
    <img src="../assets/img/landing3.jpg" alt="">
   </div>
   <div class="box">
    <div class="text">
     <span>about us</span>
     <h3>welcome to sawada's gym</h3>
     <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, ipsam!</h5>
     <p>Lorem ipsum dolor, sit amet 
     consectetur adipisicing elit. Fugit velit
      unde quasi laboriosam atque. Cum ad fuga, 
      beatae unde, atque totam aliquam possimus 
     alias, voluptates ex soluta accusamus assumenda! Asperiores!</p>
    </div>
    <div class="aboutbox">
      <div class="btnss">
       <span @click="about = 1" :class="{'active': about == 1}">about us</span>
       <span @click="about = 2" :class="{'active': about == 2}">why choose us us</span>
      </div>
      <p>Lorem ipsum dolor sit amet
       consectetur adipisicing elit.
        Delectus deserunt eveniet dolores,
         quod ipsam atque ullam excepturi? Dignissimos dolore 
      voluptates facere asperiores nesciunt cupiditate,
       nihil id error similique earum atque.</p>
    </div>

   </div>
  </div>

 

  <div class="working">
   <div class="text">
    <p>CLASS SCHEDULE</p>
    <h3>WORKING HOURS</h3>
    <div class="days">
     <span @click="day = 1" :class="{'active': day == 1}">monday</span>
     <span @click="day = 2" :class="{'active': day == 2}">tuesday</span>
     <span @click="day = 3" :class="{'active': day == 3}">wednesday</span>
     <span @click="day = 4" :class="{'active': day == 4}">thursday</span>
     <span @click="day = 5" :class="{'active': day == 5}">friday</span>
     <span @click="day = 6" :class="{'active': day == 6}">saturday</span>
     <span @click="day = 7" :class="{'active': day == 7}">sunday</span>
     </div>
   </div>
   <div class="mainbox">
    <div class="box">
     <span>6.00AM - 8.00PM</span>
     <h4>POWER LIFTING</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
    <div class="box">
     <span>8.00AM - 10.00PM</span>
     <h4>BODY BUILDING</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
    <div class="box">
     <span>6.00AM - 8.00PM</span>
     <h4>CARDIO PROGRAM</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
    <div class="box">
     <span>12.00AM - 2.00Am</span>
     <h4>WEIGHT LOOSE</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
    <div class="box">
     <span>6.00AM - 8.00Am</span>
     <h4>POWER LIFTING</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
    <div class="box">
     <span>6.00AM - 8.00Am</span>
     <h4>FITNESS PROGRAM</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
    <div class="box">
     <span>6.00AM - 8.00Am</span>
     <h4>CROSSFIT CLASS</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
    <div class="box">
     <span>6.00AM - 8.00Am</span>
     <h4>MUSCLE BUILDING</h4>
     <p class="lead text-light">khaled sawada</p>
    </div>
   </div>
  
  </div>

  <div class="thebar" id="thebar">
   <div class="iconn">
   <div class="theicon">
    <i class="fa-sharp fa-solid fa-star"></i>
   
   </div>
    <div class="textt">
     <p>EXPERIENCE</p>
     <h2>{{ num1 }}</h2>
    </div>
   </div>
   <div class="iconn">
   <div class="theicon">
    <i class="fa-solid fa-user-group"></i>

   </div>
    <div class="textt">
     <p>OUR TRAINERS</p>
     <h2>{{ num2 }}</h2>
    </div>
   </div>
   <div class="iconn">
   <div class="theicon">
    <i class="fa-solid fa-check"></i>
   
   </div>
    <div class="textt">
     <p>COMPLETE PROJECT</p>
     <h2>{{ num3 }}</h2>
    </div>
   </div>
   <div class="iconn">
   <div class="theicon">
    <i class="fa-solid fa-mug-hot"></i>
   </div>

    <div class="textt">
     <p>HAPPY CLIENTS</p>
     <h2>{{ num4 }}</h2>
    </div>
   </div>
  </div>
    


    <div class="theblogs">
    <div class="text">
     <span style="text-transform: uppercase;">our blog</span>
      <h2>latest blog post</h2>
    </div>
     <div class="mainbox">
      <div class="box">
      <div class="image">
        <img src="../assets/img/blog-1.jpg" alt="">      
      </div>
        <div class="textt">
         <div class="date">
         <span>01</span>
         <p>JANUARY</p>
         <span>2023</span>
         </div>
         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
      </div>
      <div class="box">
      <div class="image">
        <img src="../assets/img/blog-2.jpg" alt="">      
      </div>
        <div class="textt">
         <div class="date">
         <span>01</span>
         <p>JANUARY</p>
         <span>2023</span>
         </div>
         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
      </div>
      <div class="box">
      <div class="image">
        <img src="../assets/img/blog-3.jpg" alt="">      
      </div>
        <div class="textt">
         <div class="date">
         <span>01</span>
         <p>JANUARY</p>
         <span>2023</span>
         </div>
         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
      </div>
   
     </div>
    </div>
    
    <div class="theteam">
     <div class="text">
      <span>the team</span>
      <h2>EXPERT TRAINERS</h2>
     </div>
     <div class="mainbox">
      <div class="box box1">
        <div class="textt">
         <h3>khaled sawada</h3>
         <p>TRAINER</p>
        </div>
        <div class="overlay">
         <div class="icons">
          <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
         </div>
        </div>
      </div>
      <div class="box box3">
        <div class="textt">
         <h3>khaled sawada</h3>
         <p>TRAINER</p>
        </div>
        <div class="overlay">
         <div class="icons">
          <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
         </div>
        </div>
      </div>
      <div class="box box2">
        <div class="textt">
         <h3>khaled sawada</h3>
         <p>TRAINER</p>
        </div>
        <div class="overlay">
         <div class="icons">
          <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
         </div>
        </div>
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
// @ is an alias to /src


  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation } from 'swiper';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-creative';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';



  // import required modules
  import { EffectCreative } from 'swiper';

  import {ref , onMounted} from 'vue'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {

       let day = ref(1);
       let about = ref(1);

       let num1 = ref(0);
       let num2 = ref(0);
       let num3 = ref(0);
       let num4 = ref(0);

      //  offsetHeight


      onMounted(()=>{
        console.log('mounted');
        let thebar = document.getElementById('thebar');
        let pos = thebar.offsetTop;
        window.addEventListener('scroll', ()=>{
    
          if(window.scrollY >= pos){
           let counter1 = setInterval(() => {
                
            if(num1.value >= 123){
              clearInterval(counter1);
            } else{
              num1.value = num1.value + 1;

            }
           }, 100 / 2);
           let counter2 = setInterval(() => {
                
            if(num2.value >= 200){
              clearInterval(counter2);
            } else{
              num2.value = num2.value + 1;

            }
           }, 100 / 4);
           let counter3 = setInterval(() => {
                
            if(num3.value >= 250){
              clearInterval(counter3);
            } else{
              num3.value = num3.value + 1;

            }
           }, 100 / 7);
           let counter4 = setInterval(() => {
                
            if(num4.value >= 700){
              clearInterval(counter4);
            } else{
              num4.value = num4.value + 1;

            }
           }, 100 / 10);
          }
        });
      });
      const thewindow = ()=>{
      
        window.addEventListener('scroll', ()=>{
          let thebar = document.getElementById('thebar');
        let pos = thebar.offsetTop;
          if(window.scrollY >= pos){
           let counter1 = setInterval(() => {
                
            if(num1.value >= 123){
              clearInterval(counter1);
            } else{
              num1.value = num1.value + 1;

            }
           }, 100 / 2);
           let counter2 = setInterval(() => {
                
            if(num2.value >= 200){
              clearInterval(counter2);
            } else{
              num2.value = num2.value + 1;

            }
           }, 100 / 4);
           let counter3 = setInterval(() => {
                
            if(num3.value >= 250){
              clearInterval(counter3);
            } else{
              num3.value = num3.value + 1;

            }
           }, 100 / 7);
           let counter4 = setInterval(() => {
                
            if(num4.value >= 700){
              clearInterval(counter4);
            } else{
              num4.value = num4.value + 1;

            }
           }, 100 / 10);
          }
        });
      }
      
        // thewindow();


      return {
        modules: [EffectCreative , Autoplay , Pagination , Navigation],
        day,
        about,
        num1,
        num2,
        num3,
        num4,
      };
    },
  };
</script>



<style lang="scss">
@import '../sass/mainstyle.scss';
.landing{
  .swiper {
  width: 100%;
  height: 600px;
}

.swiper-pagination-bullet{
  background-color: $primary;
}

.swiper-button-prev,
    .swiper-button-next{
      color: $primary;
    }

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  width: 100%;
  height: 100%;
  background-position: center top 0%;

  &.img1{
    background: linear-gradient(rgba(34, 36, 41, .8), rgba(34, 36, 41, .8)), url(../assets/img/tars.jpg) top center no-repeat;
    background-size: cover;
  }
  &.img2{
    background: linear-gradient(rgba(34, 36, 41, .8), rgba(34, 36, 41, .8)), url(../assets/img/landing2.jpg) top center no-repeat;
    background-size: cover;
    }
  &.img3{
    background: linear-gradient(rgba(34, 36, 41, .8), rgba(34, 36, 41, .8)), url(../assets/img/carousel-1.jpg) top center no-repeat;
    background-size: cover;
    }
  &.img4{
    background: linear-gradient(rgba(34, 36, 41, .8), rgba(34, 36, 41, .8)), url(../assets/img/carousel-2.jpg) top center no-repeat;
    background-size: cover;
  }
  
  .box{
    .text{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      text-align: center;
      h3{
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
        
      }
      .btns{
        display: flex;
        align-items: center;
        gap: 10px;
        button , a{
          padding: 10px 15px;
          font-size: 20px;
          &:nth-child(1){
            background-color: $primary;
            color: #fff;
          }
        }
      }
      
   
     
    }
  }
  // color: #fff;
}

// .swiper-slide:nth-child(1n) {
//   background-color: rgb(206, 17, 17);
// }

// .swiper-slide:nth-child(2n) {
//   background-color: rgb(0, 140, 255);
// }

// .swiper-slide:nth-child(3n) {
//   background-color: rgb(10, 184, 111);
// }

// .swiper-slide:nth-child(4n) {
//   background-color: rgb(211, 122, 7);
// }

// .swiper-slide:nth-child(5n) {
//   background-color: rgb(118, 163, 12);
// }

// .swiper-slide:nth-child(6n) {
//   background-color: rgb(180, 10, 47);
// }

// .swiper-slide:nth-child(7n) {
//   background-color: rgb(35, 99, 19);
// }

// .swiper-slide:nth-child(8n) {
//   background-color: rgb(0, 68, 255);
// }

// .swiper-slide:nth-child(9n) {
//   background-color: rgb(218, 12, 218);
// }

// .swiper-slide:nth-child(10n) {
//   background-color: rgb(54, 94, 77);
// }

}

@media(max-width:700px){
  .landing{
    .swiper{
 .swiper-button-prev,
    .swiper-button-next{
      display: none;
    }
    }
   
  }
}
  
  .working{
    // text-align: center;
    margin: 50px 0px;
    .text{
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p{
        font-weight: bold;
        color: $primary;
      }
      h3{
        font-weight: bolder;
        color: $dark;
      }
      .days{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $dark;
        gap: 10px;
        padding: 15px;
        border-radius: 15px;
        color: #fff;
        span{
          cursor: pointer;
          text-align: center;
          &.active{
            background-color: $primary;
            padding: 10px;
            border-radius: 10px;
         
          }
        }
      }
    }
    .mainbox{
       display: grid;
       grid-template-columns: repeat(4 , 1fr);
       width: 80%;
       margin: 20px auto;
       gap: 10px;
       .box{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: $dark;
        padding: 20px;
        gap: 10px;
        span{
          color: gray;
        }
        h4{
          font-size: 17px;
          color: $primary;
          font-weight: bolder;
        }
       }

    }
  
  }


  .about{
    display: flex;
    align-items: center;
    width: 90%;
    margin: 30px auto;
    gap: 30px;
    .image{
      width: 50%;
      img{
        width: 100%;
        object-fit: contain;
      }
    }
    .box{
      width: 50%;
      display:flex;
      // align-items: center;
      flex-direction: column;
      gap: 30px;
      .text{
        display: flex;
        // align-items: center;
        flex-direction: column;
        gap: 20px;
        span{
          color:$primary;
          font-size: 18px;
        }
        h3{
          font-weight: bolder;
          font-size: 35px;
          color: black;
          text-transform: uppercase;
        }
        h5{
          color: #ccc;
          font-weight: bolder;
        }
        p{
          font-size: 15px;
        }
      }
      .aboutbox{
        background-color: $dark;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        p{
            color: #fff;
          }
        .btnss{
          display: flex;
          align-items: center;
          gap: 20px;
          span{
            color: $primary;
            cursor: pointer;
            &.active{
              color: #fff;
              background-color: $primary;
              padding: 10px 30px;
              border-radius: 10px;
            }
          }
          
        }
      }
    }
  }

  .thebar{
    background-color: $dark;
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    padding: 30px;
    gap: 20px;
    margin: 50px 0px;
    .iconn{
      display: flex;
      align-items: center;
      gap: 10px;
      i{
        background-color: $primary;
        color: #fff;
        font-size: 20px;
        padding: 20px;
        border-radius: 50%;
      }
      .textt{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        h2{
          font-weight: bolder;
          color: #fff;
          font-size: 35px;
        }
        p{
          color: gray;
        }
      }
    }
  }


  .theblogs{
    .text{
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      span{
        color: $primary;
        font-weight: bolder;
      }
      h2{
        font-size: 35px;
        color: black;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }
    .mainbox{
      display: grid;
      grid-template-columns: repeat(3 , 1fr);
      width: 90%;
      margin: 50px auto;
      .box{
        // width: 340px;
        display: flex;
        flex-direction: column;
        // align-items: center;
        margin: 10px;
        overflow: hidden;
        transition: 0.5s;
        .image{
          width: 100%;
          overflow: hidden;
        }
        img{
          width: 100%;
          transition: 0.5s;
          overflow: hidden;
        }
        &:hover{
          img{
            transform:scale(1.2);
          }
        }
        .textt{
          overflow: hidden;
          display: flex;
          align-items: center;
          background-color: $dark;
          color: #fff;
          padding: 10px;
          gap: 20px;
          .date{
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 2px solid gray;
            padding: 0px 10px;
            gap: 5px;
            span{
              color: #ccc;
              font-size: 14px;
            }
            p{
              font-size: 14px;
              font-weight: bolder;
            }
          }
          h5{
            font-size: 16px;
            font-weight: bolder;
          }
        }
      }
    }
  }


  .theteam{
    .text{
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      span{
        color: $primary;
        font-weight: bolder;
        text-transform: uppercase;
      }
      h2{
        font-weight: bolder;
        color: black;
        font-size: 35px;
      }
    }
    .mainbox{
      display: grid;
      grid-template-columns: repeat(3 , 1fr);
      gap: 10px;
      width: 90%;
      margin: 50px auto;
      overflow: hidden;
      .box{
        background-size: cover;
        background-repeat: no-repeat;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        overflow: hidden;
        transition: 0.5s;
        position: relative;
        &.box1{
          background-image: url('../assets/img/team-1.jpg');
        }
        &.box2{
          background-image: url('../assets/img/team-2.jpg');

        }
        &.box3{
          background-image: url('../assets/img/team-3.jpg');

        }
        .overlay{
          position: absolute;
          top: 0;
          background-color: #333333bc;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s;
          transform: scale(0);
          .icons{
            display: flex;
            align-items: center;
            gap: 10px;
            i{
              font-size: 20px;
              background-color: #fff;
              padding: 15px;
              border-radius: 50%;
              color: black;
              cursor: pointer;
              transition: 0.5s;
              &:hover{
                color: $primary;
              }
            }
          }
        }
        &:hover{
              background-position: 10%;
              .overlay{
                transform: scale(1);
              }
        }
        .textt{
          width: 100%;
          background-color: #333333b1;
          color: #fff;
          display:flex;
          flex-direction: column;
          align-items: center;
          justify-content: end;
           padding: 10px;
          gap: 5px;
          h3{
            font-weight: bolder;
          }
          p{
            color: #ccc;
          }
        }
      }
    }
  }


  .testimonial{
    display: flex;
    align-items: center;
    height: 450px;
  
    margin: 20px 0px;

.swiper-pagination-progressbar-fill{
  background-color: $primary;
}

.swiper-button-prev,
    .swiper-button-next{
      color: $primary;
      position: absolute;
      top: 90%;
      width: 10px;
      height: 10px;
      font-size: 10px;
    }


     .image{
      width: 50%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
     }
     .box{
      position: relative;
      height: 100%;
      width: 50%;
      background-color: $dark;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .textt{
         display: flex;
         flex-direction: column;
         gap: 10px;
         align-items: center;
         span{
          color: $primary;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: bold;
         }
         h3{
          font-weight: bolder;
          color: #fff;
          font-size: 30px;
         }
      }
      .testi{
        position: relative;
        margin: 20px 0px;
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .client{
          display: flex;
          align-items: center;
             gap: 20px;
             margin-bottom: 50px;
          img{
            width: 70px;
            border-radius: 50%;
            
          }
          .text{
              display: flex;
              flex-direction: column;
              gap: 10px;
              h5{
                font-weight: bolder;
              }
              p{
                color: gray;
              }
            }
        }
      }
     }
  }

  @media(max-width: 800px){
    .testimonial{
      width: 100%;
    
      flex-direction: column;
      height: 100%;
      .image{
       width: 100%;
      }
      .box{
       width: 100%;
      }
    }
  }

  @media(max-width:700px){
  .testimonial{
    .swiper-button-next,
    .swiper-button-prev{
      display: none;
    }
  }
  }



  @media(max-width:1000px){
    .theteam{
      .mainbox{
       grid-template-columns: repeat(2 , 1fr);
       .box{
        height: 450px;
       }
      }
    }
    .theblogs{
      .mainbox{
        grid-template-columns: repeat(2 , 1fr);
      }
    }
  }
  @media(max-width:720px){
    .theteam{
      .mainbox{
       grid-template-columns: repeat(1 , 1fr);
       .box{
        width: 100%;
        // height: 650px;
       }
      }
    }
    .theblogs{
      .mainbox{
        grid-template-columns: repeat(1 , 1fr);
      }
    }
  }



  @media(max-width:920px){
    .thebar{
      grid-template-columns: repeat(3 , 1fr);
    }
  }
  @media(max-width:827px){
    .thebar{
      grid-template-columns: repeat(2 , 1fr);
    }
  }
  @media(max-width:600px){
    .thebar{
      grid-template-columns: repeat(1 , 1fr);
      gap: 30px;
      text-align: center;
      .iconn{
        width: 100%;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .textt{
          h2{
            font-size: 30px;
          }
        }
      }
    }
  }

  @media(max-width:1000px){
    .working{
      .mainbox{
        grid-template-columns: repeat(3 , 1fr);
      }
    }
  }

  @media(max-width:813px){
    .working{
      .mainbox{
        grid-template-columns: repeat(2 , 1fr);
      }
    }
  }
  @media(max-width:550px){
    .working{
      .mainbox{
        grid-template-columns: repeat(1 , 1fr);
      }
    }
  }

  @media(max-width:670px){
    .working{
      .text{
        .days{
          gap: 20px;
          flex-direction: column;
        }
      }
    }
  }

  @media(max-width:850px){
    .about{
      flex-direction: column;
      .box{
        width: 100%;
      }
      .image{
        width: 100%;
        
      }
    }
  }
 
</style>
