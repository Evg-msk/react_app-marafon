import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                id="1"
                urlBg
                colorBg
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                id="2"
                urlBg={false}
                colorBg
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                id="3"
                urlBg
                colorBg
            />
            <Footer />
        </>
    )
};


export default App;