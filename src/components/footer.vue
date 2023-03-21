<template>
    <div>
        <div class="thefooter">
        <div class="mainbox">
            <div class="box">
            <h3>get in touch</h3>
            <div class="ico">
                <i class="fa-solid fa-location-dot"></i>
                <p class="lead text-light">1 ahmed-sawada-street,giza</p>
            </div>  
            <div class="ico">
                <i class="fa-solid fa-envelope"></i>
                <p class="lead text-light">khaledsawada1@gmail.com</p>
            </div>  
            <div class="ico">
                <i class="fa-solid fa-phone"></i>
                <p class="lead text-light">+201021189596</p>
            </div>
            <div class="social">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>  
        </div> 
        <div class="box">
         <h3>quick links</h3>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">home</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">about us</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">class schedule</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">our trainers</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">latest blog</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">contact us</p>
          </div>
        </div> 
        <div class="box">
         <h3>popular links</h3>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">home</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">about us</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">class schedule</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">our trainers</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">latest blog</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">contact us</p>
          </div>
        </div> 
        <div class="box">
         <h3>popular links</h3>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">home</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">about us</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">class schedule</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">our trainers</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">latest blog</p>
          </div>
          <div class="ico">
            <i class="fa-solid fa-arrow-right"></i>
            <p class="text-light">contact us</p>
          </div>
        </div> 
        </div>
      
      
        <h2 class="created">created by <span>khaled sawada</span></h2>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
@import '../sass/mainstyle.scss';

.created{
    font-size: 30px;
   color: #fff;
   text-align: center;
   font-weight: bolder;
   padding: 20px;
   background-color: black;
   span{
    color: $primary;
   }
}

.thefooter{
    width: 100%;
    background-color: $dark;
    .mainbox{
        padding: 30px;
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        text-align: center;
        .box{
            text-align: center;
            h3{
                font-size: 20px;
                color: #fff;
                font-weight: bolder;
                text-transform: uppercase;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            .ico{
                display: flex;
                align-items: center;
                flex-direction: column;
                transition: 0.5s;
                cursor: pointer;
                &:hover{
                    i{
                        transform: translateX(10px);
                    }
                }
                i{
                    transition: 0.5s;
                 
                    color: $primary;
                
                    border-radius: 50%;
                }
            }
            .social{
                display: flex;
                align-items: center;
                gap: 20px;
                i{
                    background-color: $primary;
                    color: #fff;
                    padding: 10px;
                    border-radius: 50%;
                    transition: 0.5s;
                    cursor: pointer;
                    font-size: 18px;
                    &:hover{
                        background-color: orangered;
                    }
                }
            }
        }
    }
}


@media(max-width:900px){
    .thefooter{
        .mainbox{
            grid-template-columns: repeat(3 , 1fr);
            gap: 30px;
        }
    }
}
@media(max-width:720px){
    .thefooter{
        .mainbox{
            grid-template-columns: repeat(2 , 1fr);
        }
    }
}
@media(max-width:525px){
    .thefooter{
        .mainbox{
            grid-template-columns: repeat(1 , 1fr);
        }
        h2{
            font-size: 20px;
        }
    }
}


</style>