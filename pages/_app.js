import '../styles/globals.css'
import Head from "next/head";
import Cookies from 'universal-cookie'
import axios from "axios";
import authAtom from "../stores/authAtom";
import {useAtom} from "jotai";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
    const cookie = new Cookies()
    const token = cookie.get('token')
    const [, setAuth] = useAtom(authAtom)
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    useEffect(()=>{
        // 토큰 여부 체크
        if ( token ) {
            setAuth(auth => ({...auth, token}))
            axios.get(process.env.API_HOST + '/me')
                .then(response => setAuth(auth => ({...auth, user: response.data})))
                .catch(error => console.log(error))
                .finally(() => setAuth(auth => ({ ...auth, loaded: true})))
        } else {
            setAuth(auth => ({ ...auth, loaded: true}))
        }
    },[])
  return(
      <>
        <Head>
          {/* import tailwind css */}
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
          {/* import bootstrap */}
          <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
              crossOrigin="anonymous"/>
        </Head>
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
