import Link from "next/link";
import {useAtom} from "jotai";
import authAtom from "../stores/authAtom";

export default function Layout({children}) {
    const [auth, setAuth] = useAtom(authAtom)
    return (
        <div className='flex flex-col'>
            <header className='container flex flex-row justify-between py-2'>
                <Link href='/'>
                    <div className='btn btn-link -ml-2'>Community</div>
                </Link>

                <div className='flex flex-row -mr-2'>
                    <Link href='/'>
                        <div className='btn btn-link'>홈</div>
                    </Link>
                    <Link href='/'>
                        <div className='btn btn-link'>일반 게시판</div>
                    </Link>
                    <Link href='/'>
                        <div className='btn btn-link'>질문 게시판</div>
                    </Link>

                    {!auth.loaded ? (<>로딩중</>) : (<>{auth.user ? (<Link href='/me'>
                        <div className='btn btn-link'>내 정보</div>
                    </Link>) : (<Link href='/auth/sign-in'>
                        <div className='btn btn-link'>로그인</div>
                    </Link>)}</>)}
                </div>
            </header>
            <main className='flex-1'>
                {children}
            </main>
        </div>
    )
}