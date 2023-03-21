<template>
    <div>
        <div class="thelanding">
         <div class="text">
           <h2>classes</h2>
           <div class="btns">
            <router-link to="/" class="btn">
              home
            </router-link>
            <button class="btn btn-light">classes</button>
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
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
     let day = ref(1);
     return{day}
    }
}

</script>

<style lang="scss">


</style>