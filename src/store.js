import Vue from 'vue';
import Vuex from 'vuex';
import {AllDogNamesList, DogImageURLs, DogRandomImage, SubBreedList} from './Apis.js';
import router from './router'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        breeds:[ ],
        dogs:[],
        imgURL:[],
        subBreeds: [],
        breedName: ''
    },
    mutations: {
        updateBreeds(state, breeds) { //takes the state of update breeds and updates it ie breeds
            state.breeds = breeds;
        },
        updateDogs(state, dogs) {
            state.dogs.push(dogs);
        },
        updateImgURL(state, img) {
            state.imgURL = img;
        },
        updateSubBreeds(state, subbreeds) {
            state.subBreeds = subbreeds;
        }
    },
    actions: {
        AllDogNames({commit, state}) {
            const result = AllDogNamesList();

            result.then((resp) => {
                commit('updateBreeds', resp.data.message);
                for(const dogname in state.breeds)
                {
                    var imgurl;
                    const UrlResult = DogRandomImage(dogname);
              
                    UrlResult.then((res) => {
                        
                        imgurl = res.data.message;
                        const dogsObj = {
                            name: dogname,
                            img: imgurl
                        }

                        commit('updateDogs',dogsObj);
                    }).catch((error)=>{console.log(error)});
                }
            }).catch((error)=>{console.log(error)});
        },
        EachDogImages({commit},breedName) {

            const Result = DogImageURLs(breedName);

            Result.then((resp) => {
              commit('updateImgURL',resp.data.message);
            }).catch((err) => {
                console.log(err);
                router.push({
                    name: 'Error',
                    params: {
                        ErrorMsg: "Breed name is not found"
                    }
                });
            });
        },
        SubBreedList({commit},breedName) {
          
            const Result = SubBreedList(breedName);
 
            Result.then((resp) => {
               commit('updateSubBreeds',resp.data.message);
            }).catch((error) => {
                    console.log(error);
                    var ErrorMsg = "Breed name "+breedName+" not found";
                    router.push({
                            name: 'Error',
                            params: {
                                ErrorMsg: ErrorMsg
                            }
                    });
            });
            
        }
    }
})