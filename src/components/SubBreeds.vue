<template>
  <div class="container">

     <table v-if="checkSubBreeds" class="table table-bordered borders">

        <thead class="thead-light"> 
            <tr>
              <th class="heading"><h5>SubBreeds of {{Search|capitalize }}</h5></th>
            </tr>
        </thead>
       <tbody>
            <tr class="data" v-for="(subBreed,index) in subBreeds" :key="index"> 
               <td>{{subBreed|capitalize}}</td>
            </tr>
       </tbody>

     </table>

  </div>    
</template>

<script>
import axios from 'axios'

export default {
   name: 'SubBreeds',
   data() {
      return {
        subBreeds: [],
        checkSubBreeds: true,
        errorMsg:''
      }  
   },
   props: ['Search'],
      methods: {
     goToErrorPage()
     {
       this.errorMsg = "Sub Breeds for "+this.Search+" not existed";
        this.$router.push({
            name: 'Error',
            params: {
                  errorMsg: this.errorMsg
            }
        });
     }
   },
   mounted() {
       axios.get('https://dog.ceo/api/breed/'+this.Search+'/list').then((resp) => {
           console.log(resp);
           this.subBreeds = resp.data.message;
           console.log(this.subBreeds.length);
            if(this.subBreeds.length==0)
            {
              this.goToErrorPage();
              this.checkSubBreeds = false;
            }
       }).catch((err) => {
           console.log(err);
           this.errorMsg = "Breed name "+this.Search+" not found";
           this.$router.push({
              name: 'Error',
              params: {
                    errorMsg: this.errorMsg
              }
           
   });
       })
}
}
</script>

<style>
.borders {
    border: 3px solid black;
    margin-top: 30px;
    width: 75%;
    text-align: left;
    border-style: double;
}
.data {
    border: 3px solid black;
    border-style: double;
}
</style>