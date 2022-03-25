import ReviewForm from './ReviewForm'
import config from './config/template.json'
import Layout from './components/Layout'

function App() {
    return (
        <Layout>
            <ReviewForm categories={config.categories} />
        </Layout>
    )
}

export default App
