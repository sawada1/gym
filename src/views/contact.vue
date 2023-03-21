<template>
    <div>
        <div class="thelanding">
         <div class="text">
           <h2>contact us</h2>
           <div class="btns">
            <router-link to="/" class="btn">
              home
            </router-link>
            <button class="btn btn-light">contact</button>
           </div>
          </div>
        </div>
        <div class="contactt">
         <div class="text">
          <span>contact us</span>
          <h2>get in touch</h2>
         </div>
         <div class="boxes">
          <div class="box">
            <i class="fa-solid fa-location-dot"></i>
             <span>visit us</span>
             <p>1 ahmed sawada street , giza</p>
          </div>
          <div class="box">
            <i class="fa-solid fa-phone"></i>
             <span>call us</span>
             <p>+201021189596</p>
          </div>

          <div class="box">
            <i class="fa-solid fa-envelope"></i>
            <p>email us</p>
            <p>khaledsawada1@gmail.com</p>
          </div>
         </div>
        </div>
        <div class="contactbox">
        <div class="mainbox">

         <div class="box">
           <div class="form">
            <div class="inp">
             <input type="text" placeholder="your name..">
             <input type="text" placeholder="your email..">
            </div>
            <input type="text" placeholder="subject">
            <textarea placeholder="message" id="" cols="30" rows="10"></textarea>
            <button class="btn">send message</button>
           </div>
         </div>
         <div class="box">
            <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=cairo&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br>
            <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
            
            </div></div>
         </div>

         </div>
        </div>
        </div>
    
</template>

<script setup>

</script>

<style lang="scss">
@import '../sass/mainstyle.scss';

.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}
.mapouter{position:relative;text-align:right;height:100%;width:100%;}
.contactt{
    text-align: center;
    .text{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      span{
        color: $primary;
      }
      h2{
        color: black;
        font-weight: bolder;
        font-size: 30px;
        text-transform: uppercase;
      }
    }
    .boxes{
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        gap: 10px;
        width: 90%;
        margin: 30px auto;
        .box{
            background-color: $dark;
            padding: 15px;
            display: flex;
            gap: 15px;
            flex-direction: column;
            align-items: center;
            justify-content:center;
            i{
                background-color: $primary;
                color: #fff;
                padding: 15px;
                border-radius: 50%;
                font-size: 20px;
            }
            span{
                color: $primary;
            }
            p{
                color: #ccc;
            }
        }
    }
}
.contactbox{
    .mainbox{
        display: flex;
        align-items: center;
        width: 95%;
        margin: 0px auto;
        .box{
          width: 50%;
          height: 500px;
          .form{
            display: flex;
            flex-direction: column;
            padding: 20px;
            background-color: $dark;
            height: 100%;
            width: 100%;
            justify-content: space-around;
            .inp{
                display: flex;
                align-items: center;
                gap: 20px;
                width: 100%;
            }
            input,textarea,button{
               padding: 10px;
               border: none;
               outline: none;
               font-size: 18px;
               border-radius: 10px;
            }
            button{
                background-color: $primary;
                color: #fff;
            }
            
          }
        }
    }
}


@media(max-width:900px){
    .contactt{
        .boxes{
            grid-template-columns: repeat(2 , 1fr);
        }
    }
}
@media(max-width:600px){
    .contactt{
        .boxes{
            grid-template-columns: repeat(1 , 1fr);
        }
    }
}

@media(max-width:980px){
    .contactbox{
        .box{
            .form{
                gap: 20px;
                .inp{
                    flex-direction: column;
                    input{
                        width: 100%;
                    }
                }
            }
        }
    }
}
@media(max-width:800px){
    .contactbox{
        .mainbox{
            flex-direction: column;
        .box{
           width: 100%;
        }
        }
        
    }
}



</style>