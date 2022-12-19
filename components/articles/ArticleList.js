import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import Pagination from "rc-pagination";
import {useRouter} from "next/router";

export default function ArticleList({title, category, page}) {
    const { data, error } = useFetch(`${process.env.API_HOST}/articles?category=${category}&page=${page}`)
    const router = useRouter()
    if ( error ) {
        return<>데이터를 불러올 수 없습니다.</>
    }
    console.log('data',data)
    return (
        <div className='container'>
            <h1>{title}</h1>

            <ul className='list-unstyled'>
                {data?.data.map(article => (
                    <li key={article.id.toString()} className='flex flex-row'>
                        <Link href={`/articles/${category}/${article.id}`}>
                            <span className='mr-2'>{ article.id }</span>
                            <a>{article.subject}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='flex justify-between'>
                {data?.meta && (
                    <Pagination
                        current = {data.meta.current_page}
                        total = {data.meta.total}
                        pageSize = {data.meta.per_page}
                        onChange = {(page) => {
                            router.push(`?page=${page}`)
                        }}
                    />
                )}
                <Link href={`/articles/${category}/create`}>
                    <button className='btn btn-primary'>글 작성하기</button>
                </Link>
            </div>
        </div>
    )
}