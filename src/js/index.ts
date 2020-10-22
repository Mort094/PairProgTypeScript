import axios, {
    AxiosResponse,
    AxiosError 
} from "../../node_modules/axios/index"

interface ICd{
    id: number
    title: string
    artist: string
    duration: number
    numberOfTracks: number
    yearOfRelease: number
}
let baseUrl: string = "http://mort-rest.azurewebsites.net/api/CD"
new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        cd: []
     
        
    },
    methods: {
        sayHello() {
            console.log("Say Hello " + this.name)
            if (this.name == "") {
                this.greeting = "Hello NoName"
            }
            else {
                this.greeting = "Hello " + this.name
            }
        }
    }
})