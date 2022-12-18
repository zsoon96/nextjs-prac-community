import ArticleView from "../../../components/articles/ArticleView";
import Layout from "../../../components/Layout";
import {fetcher} from '../../../hooks/useFetch'

export default function ViewPage({id, article}) {
    return <Layout>
        <ArticleView id={id} article={article} />
    </Layout>
}

export const getServerSideProps = async ({params}) => {
    const id = params.id
    // SSR로 데이터 페칭 > 검색엔진 반영 o
    const article = await fetcher(`${process.env.API_HOST}/articles/${id}`)

    return {
        props: {
            id, article
        }
    }
}