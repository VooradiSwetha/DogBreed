<template>
  <div class="container contains">   
     
      <div class="row search">
           <div class="col-md-4">            
              <input class="form-control"  type="text" name="breedName" v-model="Search"  placeholder="Search By Dog Breed Name"/>
            </div>

            <div class="col-md-1">
               <button class="btn btn-primary " @click="goToSearch">Search</button>
            </div>
      </div>

      <div class ="row Image">
          <div v-for="(dog,index) in pageOfItems" :key="index" class="col-md-3 List">
              <router-link :to="{name:'BreedImages', params:{BreedName: dog.name} }">
                <img :src='dog.img' :alt="dog.img" class = "Imagedesign" width="200px" height="180px">
              </router-link>  
              <p>{{dog.name }}</p>
          </div>
      </div>

      <div class="card text-center m-3">
          <div class="card-footer pb-0 pt-3">
              <jw-pagination :items="dogs" @changePage="onChangePage" :pageSize="12"></jw-pagination>
          </div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      breeds:[ ],
      dogs:[],
      pageOfItems: [],
      Search: '',
      ErrorMsg:''
    }
  },
  methods: {
     onChangePage(pageOfItems) {
          // update page of items
          this.pageOfItems = pageOfItems;
      },
      goToSearch() {
          this.$router.push({
              name: 'SubBreed',
              params: {
                  Search : this.Search 
              }
          });
      }
  },
  mounted() { 
    this.$store.dispatch('AllDogNames');
    this.breeds = this.$store.state.breeds;
    this.dogs = this.$store.state.dogs;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .search {
  padding: 20px;
}

.contains {
  margin-left: 40px;
} 

.Image {
  margin-top: 30px;
}

.List {
  margin-top: 20px;
  
  margin-left: 40px;
  
  text-align: center;
}

@media only screen and (max-width: 480px) {
  .Imagedesign {
    width: 300px;
    height: 185px;
  }
  .btn-primary {
    margin: 10px;
  }
  .DogList {
    margin-right: 30px;
  }  
}

 @media only screen and (max-width: 768px){
  .Imagedesign {
    width: 180px;
    height: 185px;
  }
  .Home {
    margin-left: 2px;
  } 
  .btn-primary {
    margin: 10px;
  } 
} 

</style>