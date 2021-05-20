import * as React from "react"
import Counter from '../components/Counter';
import Layout from "../components/layout"

const Root =  () => {
    return (
        <Layout >
            <h1>Counter</h1>
            <Counter/>
        </Layout>
    )
}

export default Root;

