<template>
    <div>
        <nav class="navbar  navbar-expand-lg bg-body-tertiary p-4">
  <div class="container-fluid">
  <router-link to="/">
    <h1 class="lead fs-1 "  >sawada</h1>  
  </router-link>
   
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
        <div class="collapse navbar-collapse mainnav" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" style="text-transform: uppercase;">
              home
            </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" style="text-transform: uppercase;">
              about
            </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/classes" class="nav-link" style="text-transform: uppercase;">
              classes
            </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/trainers" class="nav-link" style="text-transform: uppercase;">
              trainers
            </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style="text-transform: uppercase;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            pages
          </a>
          <ul class="dropdown-menu">
            <li>
            <router-link to="/blogGrid" class="dropdown-item" style="text-transform: uppercase;">
              blog grid
            </router-link>
            </li>
            <li>
            <router-link to="/blogDetail" class="dropdown-item" style="text-transform: uppercase;">
              blog detail
            </router-link>
            </li>
            <li>
            <router-link to="/testi" class="dropdown-item">
              TESTIMONIAL
            </router-link>
            </li>
           
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" style="text-transform: uppercase;">
              contact
            </router-link>
        </li>
      </ul>
      <div class="join">
       <button class="btn">join us</button>
    </div>
    
   
    </div>
   
  </div>
</nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
@import '../sass/mainstyle.scss';
a{
  text-decoration: none;
}
.navbar{

  h1{
    font-weight: bolder;
    letter-spacing:  5px;
  }
    background-color: $dark;
    .navbar-toggler{
        color: #fff;
        background-color: #fff;
        a{
    &.router-link-exact-active {
      color: #42b983;
    }
  }
    }

   
  
    .dropdown-menu{
      li{
        a{
    &.router-link-exact-active {
      color: $primary;
    } 
    }
      }
    }
 
  
    .navbar-nav{
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: center;
        a{
    &.router-link-exact-active {
      color: $primary;
    }
  }

    }
    .container-fluid{
        // display: flex;
        // align-items: center;
        // justify-content: space-around;
    }
    .join{
        button{
            background-color: $primary;
            color: #fff;
            padding: 10px 20px;
            transition: 0.5s;
            &:hover{
                transform: translateX(10px);
            }
            
        }
    }
    h1{
        color: $primary;
    }
    .collapse{
        a{
        color: #fff;
    }
    .dropdown-menu{
        a{
            color: #333;
        }
    }
    }
    a{
        transition: 0.5s;
        &:hover{
            color: $primary;
        }
    }
   
}


@media(max-width: 991px){
.navbar{
    .mainnav{
        .navbar-nav{
            display: block;
        }
    }
}
}

</style>