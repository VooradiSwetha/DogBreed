<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm SetUp">
      <router-link :to="{name:'HomePage'}"  class="navbar-brand" exact>Dog Breed</router-link>  
    </nav>
    <router-view />
    
        
  </div>
</template>

<script>
// import BreedImages from './components/BreedImages.vue'
// import HomePage from './components/HomePage.vue'


export default {
  name:'App',
  components: {
   

  }
}
 
</script>


<style>
#app {
  font-family:  Helvetica, Arial , sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #020c16;
 
}

.SetUp {
  background-color:rgb(156, 161, 84);
  padding: 15px !important;  
}

.SetUp a {
  color:rgb(30, 16, 156);
  font-weight: bold;
}
</style>