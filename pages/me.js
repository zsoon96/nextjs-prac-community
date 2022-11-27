import axios from "axios";
import {useEffect} from "react";
import Cookies from 'universal-cookie';

export default function Me() {
    const cookie = new Cookies();
    const token = cookie.get('token');

    useEffect (()=> {
        axios.get(`${process.env.API_HOST}/me`)
            .then(response => console.log(response))
            .catch(error => console.warn(error))
    },[])

    if ( !token ) {
        return <>로그인이 필요합니다.</>
    }

    return <div className ='container'>
        사용자 정보 표시
    </div>
}