<template>
  <div class="container">
     <table v-if="checkSubBreeds" class="table table-bordered Border">

        <thead class="thead-light"> 
            <tr>
              <th class="heading"><h5>SubBreeds of {{Search }}</h5></th>
            </tr>
        </thead>

       <tbody>
            <tr class="Design" v-for="(subBreed,index) in subBreeds" :key="index"> 
               <td>{{subBreed}}</td>
            </tr>
       </tbody>

     </table>
  </div>    
</template>

<script>

export default {
   name: 'SubBreed',
   data() {
      return {
        subBreeds: [],
        checkSubBreeds: false,
        ErrorMsg: ''
      }  
   },
   props: ['Search'],
   methods: {
     goToErrorPage()
     {
       this.ErrorMsg = "Sub Breeds for "+this.Search+" not existed";
        this.$router.push({
            name: 'Error',
            params: {
                  ErrorMsg: this.ErrorMsg
            }
        });
     }
   }, 
   mounted() {
       this.$store.dispatch('SubBreedList',this.Search);
       this.subBreeds = this.$store.state.subBreeds;
       if(this.subBreeds.length == 0) {
         this.goToErrorPage();
       }
       else {
         this.checkSubBreeds = true;
       }
  }
  
}
</script>

<style>
.Border {   
    border: black;
    margin-top: 30px;
    text-align: left;
    border-style: solid;
}
.Design {
    border-style: solid;
} 
</style>