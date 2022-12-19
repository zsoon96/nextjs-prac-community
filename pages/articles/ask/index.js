import Layout from "../../../components/Layout";
import ArticleList from "../../../components/articles/ArticleList";
import {fetcher} from "../../../hooks/useFetch";
import {SWRConfig} from 'swr'

export default function AskArticles({fallback, page}) {
    return <SWRConfig value={{fallback}}>
        <Layout>
            <ArticleList title='질문 게시판' category='ask' page={page}/>
        </Layout>
    </SWRConfig>

}

export const getServerSideProps = async ({query}) => {
    const page = query.page || 1;
    const url = `${process.env.API_HOST}/articles?category=ask&page=${page}`
    const data = await fetcher(url)
    return {
        props: {
            page,
            fallback: {
                [url]: data
            }
        }
    }
}