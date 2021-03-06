import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
import { resolve } from "../../webpack.config"

interface ICd {
    id: number
    title: string
    artist: string
    duration: number
    numberOfTracks: number
    yearOfPublication: number
}
let baseUrl: string = "http://mort-rest.azurewebsites.net/api/CD/"
new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        cds: [],
        artistToGetBy: ""

    },
    methods: {
        helperGetAndShow(url: string) {
            axios.get<ICd[]>(url)
                .then((response: AxiosResponse<ICd[]>) => {
                    this.cds = response.data
                })
                .catch((error: AxiosError) => {
                    alert(error.message)
                })
        },
        GetAllCD() {
            this.helperGetAndShow(baseUrl)
        },
        getByArtist(artist: string){
            let url = baseUrl + "Artist/" + artist
            this.helperGetAndShow(url)

        }
    }
})