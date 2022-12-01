import ArticleView from "../../../components/articles/ArticleView";
import Layout from "../../../components/Layout";

export default function ViewPage({id}) {
    return <Layout>
        <ArticleView id={id} />
    </Layout>
}

export const getServerSideProps = ({params}) => {
    return {
        props: {
            id: params.id
        }
    }
}