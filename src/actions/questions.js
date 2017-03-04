//Node modules import

import axios from 'axios'

//Receive a random question
export function fetchQuestion(){
    return function(){
       return axios.get('http://jservice.io/api/random').then(function(response){
           console.log(response)
       })
    }
}
