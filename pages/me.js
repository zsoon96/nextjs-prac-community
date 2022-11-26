import axios from "axios";
import {useEffect} from "react";

export default function Me() {
    useEffect (()=> {
        axios.get(`${process.env.API_HOST}/me`)
            .then(response => console.log(response))
            .catch(error => console.warn(error))
    },[])

    return <div className ='container'>

    </div>
}