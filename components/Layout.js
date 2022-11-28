import Link from "next/link";

export default function Layout({children}) {
    return (
        <div className='flex flex-col'>
            <header className='container flex flex-row justify-between py-2'>
                <Link href='/'>
                   <div className='btn btn-link -ml-3'>Community</div>
                </Link>

                <div className='flex flex-row -mr-4'>
                    <Link href='/'>
                        <div className='btn btn-link'>홈</div>
                    </Link>
                    <Link href='/'>
                        <div className='btn btn-link'>일반 게시판</div>
                    </Link>
                    <Link href='/'>
                        <div className='btn btn-link'>질문 게시판</div>
                    </Link>
                    <Link href='/me'>
                        <div className='btn btn-link'>내 정보</div>
                    </Link>
                </div>
            </header>
            <main className='flex-1'>
                {children}
            </main>
        </div>
    )
}