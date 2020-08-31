<template>
  <div id="app">
    <div class="d-flex container justify-content-between mt-3">
      <div class="brand-logo">Nyuss</div>
      <ul class="navbar-nav flex-row">
        <li class="nav-item mx-3">
          <a href="#promo" class="nav-link">Promo</a>
        </li>
        <li class="nav-item mx-3">
          <a href="#unggulan" class="nav-link">Unggulan</a>
        </li>
        <li class="nav-item mx-3">
          <a href="#menu" class="nav-link">Menu</a>
        </li>
        <li class="nav-item mx-3">
          <a href="#kontak" class="nav-link">Kontak</a>
        </li>
      </ul>
      <a href="#" class="btn btn-primary pb-0 m-0 px-4 login-bottom">Login</a>
    </div>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Nyuss</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav navbar-center">
            <li class="nav-item active">
              <a class="nav-link" href="#">Promo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Unggulan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kontak</a>
            </li>
          </ul>

          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </div>
    </nav>-->
    <router-view />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
.bg-primary {
  background-color: #513ba9;
}
a.login-bottom {
  font-size: 18px;
  font-weight: 700;
  background-color: #513ba9;
}

.navbar-nav.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
}
.nav-link {
  color: black;
  font-size: 18px;
}
.brand-logo {
  font-weight: 700;
  font-size: 30px;
}
#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
