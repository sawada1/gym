<template>
  <div>
    <div class="thelanding">
         <div class="text">
           <h2>about us</h2>
           <div class="btns">
            <router-link to="/" class="btn">
              home
            </router-link>
            <button class="btn btn-light">blog</button>
           </div>
          </div>
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
  </div>
</template>


<script>
import {ref} from 'vue'
export default {
  setup(){
    let about = ref(1);

    return{about}
  }

}
</script>



