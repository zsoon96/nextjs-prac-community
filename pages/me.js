import axios from "axios";
import {useEffect} from "react";
import Cookies from 'universal-cookie';

export default function Me() {
    useEffect (()=> {
        axios.get(`${process.env.API_HOST}/me`)
            .then(response => console.log(response))
            .catch(error => console.warn(error))
    },[])

    return <div className ='container'>
        사용자 정보 표시
    </div>
}

export const  getServerSideProps = async ( {req,resolvedUrl} ) => {
    const cookie = new Cookies(req.headers.cookie)
    const token = cookie.get('token')
    if ( token ) {
        return {
            // props가 없을 경우라도 {} 빈값으로 넘겨야지 렌더링이 가능
            props: {}
        }
    } else  {
        return {
            // redirect 통해 토큰이 없을 경우 로그인 페이지로 이동
            redirect: {
                // 로그인 완료 후, 이동할 페이지 경로 전달
                destination: '/auth/sign-in?ref=' + resolvedUrl,
                permanent: false
            }
        }
    }
}