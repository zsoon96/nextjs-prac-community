import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import Cookies from 'universal-cookie';
import Layout from "../components/Layout";
import authAtom from "../stores/authAtom";
import {useAtom} from "jotai";
import {useRouter} from "next/router";

export default function Me() {
    const [profile, setProfile] = useState({})
    const [ , setAuth] = useAtom(authAtom)
    const router = useRouter()

    useEffect(() => {
        axios.get(`${process.env.API_HOST}/me`)
            .then(response => setProfile(response.data))
            .catch(error => console.warn(error))
    }, [])

    const logout = useCallback(() =>{
        const cookie = new Cookies()
        cookie.remove('token')
        setAuth(auth => ({...auth, token: null, user: null}))
        delete axios.defaults.headers.common.Authorization
        router.push('/')
    })

    return <Layout>
        <div className='container'>
            <d1>
                <dt>이메일</dt>
                <dd>{profile.email}</dd>
                <dt>이름</dt>
                <dd>{profile.name}</dd>
                <dt>가입일시</dt>
                <dd>{profile.created_at}</dd>
            </d1>

            <button className='btn btn-danger' onClick={logout}>로그아웃</button>
        </div>
    </Layout>
}

export const getServerSideProps = async ({req, resolvedUrl}) => {
    const cookie = new Cookies(req.headers.cookie)
    const token = cookie.get('token')
    if (token) {
        return {
            // props가 없을 경우라도 {} 빈값으로 넘겨야지 렌더링이 가능
            props: {}
        }
    } else {
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