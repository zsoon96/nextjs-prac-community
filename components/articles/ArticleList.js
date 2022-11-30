import Link from "next/link";

export default function ArticleList({title, category}) {
    return (
        <div className='container'>
            <h1>{title}</h1>
            <>목록</>

            <div className='flex justify-end'>
                <Link href={`/articles/${category}/create`}>
                    <button className='btn btn-primary'>글 작성하기</button>
                </Link>
            </div>
        </div>
    )
}