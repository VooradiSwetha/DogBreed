<template>
<div class="container spacing">
 <div class="row check">
    <div class="col-md-5 ">    
   <input class="form-control"  type="text" name="breedName" v-model="Search"  placeholder="Search By dog breed "  width="200px" height="200px"/>
    </div>
  
        <button class="btn btn-primary" @click="goToSearch">Search</button>  
 
 
   <div class="row design " >
  <div v-for="(dog,index) in pageOfItems" :key="index" class="col-md-3 col-lg-3 col-sm-3 col-xl-3 ">
 <router-link :to="{name:'BreedImages', params:{BreedName: dog.name} }">
  <img :src="dog.img" :alt="dog.img" width="200px" height="200px">
  </router-link> 
  <h1>{{dog.name}}</h1>
  </div>

   </div>

<div class="card text-center m-3">
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="dogs" @changePage="onChangePage" :pageSize="12"></jw-pagination>
        </div>
        </div>
    </div>

</div>
    

</template>


<script>

import axios from 'axios';

export default {
  name: 'HomePage',
  
  data() {
    return {
     breeds:[],
     dogs:[],
     pageOfItems: [],
     Search:'',
     check: false,
     errorMsg:''
    }
    },

methods:{
     onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
        goToSearch() {
        this.$router.push({
           name: 'SubBreeds',
           params: {
             Search : this.Search 
           }
        });
      }
        

  },
  mounted() {
    axios.get('https://dog.ceo/api/breeds/list/all').then((result)=>{
    // console.log(result);
     this.breeds = result.data.message;
      for(const property in this.breeds){
        var imgUrl;
        axios.get('https://dog.ceo/api/breed/'+property+'/images/random').then((res)=>{
              imgUrl = res.data.message;
              const dogObj = {
                  name: property,
                  img: imgUrl,
              }

              this.dogs.push(dogObj)
       })
    }
    
        
    
  })

  
  }}


 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>

.check {
  padding: 20px;
}

.spacing {
  margin-left: 40px;
}

    
 .design {
  margin-top: 20px;
 
 }

 .h1, h1 {
    font-size: 1.5rem;
}
 


</style>
