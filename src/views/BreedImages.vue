<template>
  <div class="container">
    
     <div class ="row">
          <div v-for="(img,index) in pageOfItems" :key="index" class="col-md-3 check">
                <img :src='img' :alt="img" width="200px" height="180px">
          </div>
      </div>

      <div class="card text-center m-3">
          <div class="card-footer pb-0 pt-3">
              <jw-pagination :items="imgURL" @changePage="onChangePage" :pageSize="12"></jw-pagination>
          </div>
      </div>

  </div>   
</template>

<script>
export default {
   name: 'BreedImages',
   data() {
     return {
        imgURL: [],
        pageOfItems: [],
        ErrorMsg:''
     }
   },
   methods: {
     onChangePage(pageOfItems) {
          // update page of items
          this.pageOfItems = pageOfItems;
      }
  },
   props: ['BreedName'],
   mounted() {
       this.$store.dispatch('EachDogImages',this.BreedName);
       this.imgURL = this.$store.state.imgURL;
   }
}
</script>

<style>
.check {
    margin-top: 20px;
} 
</style>