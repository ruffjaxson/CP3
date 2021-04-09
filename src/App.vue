<template>
  <div id="app">
    <div id="menu">
      <div class="title">
        <h1>STAR WARS</h1>
      </div>
      <div class='menu-options'>
        <router-link to="/">Home</router-link>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/Testimony">Testimony</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>

h1 {
  font-family: 'Dela Gothic One', cursive;
}
#menu{

  color: #FFE81F; /* Yellow */
  background-color: #000000;  /* Black */
  padding: 20px 0;
  width: 100%;
  font-size: 1.3em;

}
.title{
  grid-area: brand;
  display: flex;
  justify-content: center;
}
a {
  color: #FFE81F;
}
.menu-options{

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
