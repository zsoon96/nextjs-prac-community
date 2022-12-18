import useFetch from "../../hooks/useFetch";
// 리액트의 '\n 또는 \r\n'을 HTML의 '<br>'로 변환해주는 라이브러리
import nl2br from 'react-nl2br';
import Head from 'next/head';

export default function ArticleView({id}) {
    // CSR로 데이터 페칭 - 검색엔진 반영 x
    const { data, error } = useFetch(`${process.env.API_HOST}/articles/${id}`)
    if (error) {
        return <> 데이터 로드에 실패했습니다.</>
    }
    return <div className="container">
        <Head>
            {/* 검색엔진이 검색을 할 때, 가장 중요하게 보는 요소 중 하나이기 때문에 필수 설정 */}
            <title>{data?.subject} - Community</title>
        </Head>
        <h1>{data?.subject}</h1>
        <hr />
        <p>{nl2br(data?.content)}</p>
    </div>
}