import axios from 'axios'

export function AllDogNamesList() {
    return axios.get(`https://dog.ceo/api/breeds/list/all`);
}

export function DogRandomImage(BreedName) {
    return axios.get(`https://dog.ceo/api/breed/${BreedName}/images/random`);
}

export function DogImageURLs(BreedName) {
    return axios.get(`https://dog.ceo/api/breed/${BreedName}/images`);
}

export function SubBreedList(BreedName) {
    return axios.get(`https://dog.ceo/api/breed/${BreedName}/list`);
}