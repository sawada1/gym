<template>
    <div>
        <div class="thelanding">
         <div class="text">
           <h2>blog grid</h2>
           <div class="btns">
            <router-link to="/" class="btn">
              home
            </router-link>
            <button class="btn btn-light">blog</button>
           </div>
          </div>
        </div>
        <div class=" thegrid">
          <div class="mainboxes">
             <div class="blogs">
             <div class="theblog">
                <div class="blog">
                 <div class="image">
                  <img src="../assets/img/blog-1.jpg" alt="">
                 </div>
                <div class="text">
                     <div class="date">
                      <span>01</span>
                       <p>JANUARY</p>
                       <span>2023</span>
                     </div>
                     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>   
                 </div>
              </div>
              <div class="blog">
                 <div class="image">
                  <img src="../assets/img/blog-2.jpg" alt="">
                 </div>
                <div class="text">
                     <div class="date">
                      <span>01</span>
                       <p>JANUARY</p>
                       <span>2023</span>
                     </div>
                     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>   
                 </div>
              </div>
              <div class="blog">
                 <div class="image">
                  <img src="../assets/img/blog-3.jpg" alt="">
                 </div>
                <div class="text">
                     <div class="date">
                      <span>01</span>
                       <p>JANUARY</p>
                       <span>2023</span>
                     </div>
                     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>   
                 </div>
              </div>
              <div class="blog">
                 <div class="image">
                  <img src="../assets/img/blog-1.jpg" alt="">
                 </div>
                <div class="text">
                     <div class="date">
                      <span>01</span>
                       <p>JANUARY</p>
                       <span>2023</span>
                     </div>
                     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>   
                 </div>
              </div>
              <div class="blog">
                 <div class="image">
                  <img src="../assets/img/blog-2.jpg" alt="">
                 </div>
                <div class="text">
                     <div class="date">
                      <span>01</span>
                       <p>JANUARY</p>
                       <span>2023</span>
                     </div>
                     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>   
                 </div>
              </div>
              <div class="blog">
                 <div class="image">
                  <img src="../assets/img/blog-3.jpg" alt="">
                 </div>
                <div class="text">
                     <div class="date">
                      <span>01</span>
                       <p>JANUARY</p>
                       <span>2023</span>
                     </div>
                     <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>   
                 </div>
              </div>
             </div>
            


    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
             </div>
             <div class="alltabs">
             <div class="search">
                <input type="search" placeholder="search here...">
                <i class="fa-solid fa-magnifying-glass"></i>
             </div>
             <h2 class="catee text-dark border-bottom">CATEGORIES</h2>
             <div class="category">
               <div class="cate">
                <i class="fa-solid fa-arrow-right"></i>
                 <h5>web design</h5>
                </div>
               <div class="cate">
                <i class="fa-solid fa-arrow-right"></i>
                 <h5>web design</h5>
                </div>
               <div class="cate">
                <i class="fa-solid fa-arrow-right"></i>
                 <h5>web design</h5>
                </div>
               <div class="cate">
                <i class="fa-solid fa-arrow-right"></i>
                 <h5>web design</h5>
                </div>
               <div class="cate">
                <i class="fa-solid fa-arrow-right"></i>
                 <h5>web design</h5>
                </div>
             </div>
             <h2 class="catee text-dark border-bottom">RECENT POST</h2>
             <div class="postss">
              <div class="postt">
               <img src="../assets/img/blog-1.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur sas.</p>
              </div>
              <div class="postt">
               <img src="../assets/img/blog-2.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur sas.</p>
              </div>
              <div class="postt">
               <img src="../assets/img/blog-3.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur sas.</p>
              </div>
              <div class="postt">
               <img src="../assets/img/blog-1.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur sas.</p>
              </div>
              <div class="postt">
               <img src="../assets/img/blog-2.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur sas.</p>
              </div>
             </div>

             <h2 class="catee text-dark border-bottom">TAG CLOUD</h2>
             <div class="tags">
              <span>design</span>
              <span>development</span>
              <span>marketing</span>
              <span>seo</span>
              <span>writing</span>
              <span>design</span>
              <span>design</span>
              <span>development</span>
              <span>marketing</span>
              <span>seo</span>
              <span>writing</span>
              <span>design</span>
             </div>

             <h2 class="catee text-dark border-bottom">PLAIN TEXT</h2>
             <div class="plain">
              <p>Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
                Blanditiis nulla expedita minus hic
                 non nihil ad harum suscipit reiciendis
               sit nam officiis asperiores molestiae
                incidunt dolore, odit quo sunt natus!</p>
                <button class="btn">read more</button>
             </div>



           
             </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

</script>

<style lang="scss">
@import '../sass/mainstyle.scss';
.thelanding{
    width: 100%;
    height: 500px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(rgba(34, 36, 41, .8), rgba(34, 36, 41, .8)), url(../assets/img/carousel-1.jpg) top center no-repeat;
    .text{
       display: flex;
       flex-direction: column;
       align-items: center;
       text-align: center;
       h2{
         font-weight: bolder;
         font-size: 40px;
         color: #fff;
         text-transform: uppercase;
       }
       .btns{
        
        display: flex;
        align-items: center;
        gap: 20px;
        a{
            background-color: $primary;
            color: #fff;
        }
        a,button{
            padding: 10px 30px;
            font-size: 18px;
        }
       }
       
    }
}

.thegrid{
    width: 100%;
    .mainboxes{
     display: grid;
     grid-template-columns: repeat(2 , 1fr);
     width: 90%;
     margin: 20px auto;
     gap: 30px;
     height: 100%;

     .blogs{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        gap: 100px;
        // justify-content: space-between;
        nav{
            // width: 400px;
            text-align: center;
            // background-color: $dark;
            border-radius: 20px;
            ul{
                width: 100%;
                li{
                    width: 100%;
                    a{
                        font-size: 20px;
                        color: $primary;
                    }
                }
            }
        }
        .theblog{
            display: grid;
        grid-template-columns: repeat(2 , 1fr);
        gap: 20px;
        // height: 100%;

        .blog{
            margin: 50px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 380px;
            height: 340px;
            transition: 0.5s;
            box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.406);
            cursor: pointer;
            .image{
              
               img{
                width: 100%;
                object-fit: contain;
                transition: 0.5s;
                
               } 
               
            }
            &:hover{
               transform: translateY(-16px);
                   
            
                
            }
            .text{
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 5px;
                color: #fff;
                background-color: $dark;
                h4{
                    font-weight: bolder;
                    font-size: 19px;
                }
                .date{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    border-right: 2px solid #333;
                    padding: 10px;
                    span{
                        color: gray;
                    }
                }
            }
        }
        }
       
     }
     .alltabs{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        gap: 30px;
        .search{
            border: 1px solid #333;
            input{
                padding: 5px;
                border: none;
                outline: none;
            }
            i{
                background-color: $primary;
                color: #fff;
                padding: 15px;
            }
        }

        .category{
            background-color: $dark;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            padding: 20px;
            width: 260px;
            .cate{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                gap: 15px;
                h5{
                    color: #fff;
                    font-weight: bolder;
                    text-transform: uppercase;
                }
                i{
                    color: $primary;
                    font-size: 20px;
                }
            }
        }

        .postss{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: $dark;
            gap: 20px;
            width: 330px;
            padding: 20px;
            .postt{
                text-align: center;
                display: flex;
                background-color: $secondary;
                align-items: center;
                border-radius: 15px;
                gap: 10px;
                box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.434);
                transition: 0.5s;
                cursor: pointer;
                &:hover{
                    p{
                        color: $primary;
                    }
                }
                p{
                    font-size: 15px;
                    font-weight: bolder;
                    color: black;
                    padding: 5px;
                    transition: 0.5s;
                }
                img{
                    width: 130px;
                    height: 100%;
                    border-end-start-radius: 20px;
                    border-start-start-radius: 20px;
                }
            }
        }
        .tags{
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            span{
                background-color: $dark;
                color: #fff;
                padding: 10px 15px;
                cursor: pointer;
                border-radius: 7px;
            }
        }
        .plain{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            padding: 20px;
            background-color: $dark;
            text-align: center;
            button{
                background-color: $primary;
                color: #fff;
                transition: 0.5s;
                &:hover{
                    background-color: orangered;
                }
            }
            p{
                color: #fff;
                font-weight: bolder;
            }
        }
     }
    }
}


@media(max-width:1100px){
    .thegrid{
        .mainboxes{
            width: 100%;
            .blogs{
                width: 100%;
                .theblog{
                    grid-template-columns: repeat(1,1fr);
                }
            }
        }
    }
}


@media(max-width:800px){
    .thegrid{
        margin: 50px 0px;
        .mainboxes{
            grid-template-columns: repeat(1 , 1fr);
            .blogs{
                width: 90%;
                margin: 20px auto;
                .theblog{
                    width: 100%;
                    gap: 50px;
                    .blog{
                        width: 100%;
                        height: 100%;
                        .image{
                            height: 100%;
                            img{
                                height: 100%;

                            }
                        }
                        .text{
                            gap: 20px;
                            h4{
                                padding: 10px 20px;
                                font-size: 18px;
                                line-height: 30px;
                            }
                        }
                    }
                }
            }
            .alltabs{
                width: 90%;
                margin: 20px auto;
                .category{
                    width: 100%;
                    .cate{
                        justify-content: center;
                    }
                }
                .postss{
                    width: 100%;
                }
            }
        }
    }
}

</style>