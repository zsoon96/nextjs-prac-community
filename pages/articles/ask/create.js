import ArticleForm from "../../../components/articles/ArticleForm";
import Layout from "../../../components/Layout";

export default function CreatePage() {
    return (
        <Layout>
            <ArticleForm category='ask'/>
        </Layout>
    )
}