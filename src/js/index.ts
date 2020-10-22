import axios, {
    AxiosResponse,
    AxiosError 
} from "../../node_modules/axios/index"
import { resolve } from "../../webpack.config"

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
        cds: []
     
        
    },
    methods: {
        GetAllCD() {
            axios.get<ICd[]>(baseUrl)
            .then((response: AxiosResponse<ICd[]>) => {
                this.cds = response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        }
    }
})