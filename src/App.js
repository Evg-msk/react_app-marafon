import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg from "./assets/bg2.jpg";
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
                urlBg={bg}
                colorBg={false}
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                id="2"
                urlBg={false}
                colorBg="gray"
            />
            <Layout
                title="This is title"
                descr="This is Description!"
                id="3"
                urlBg={bg}
                colorBg={false}
            />
            <Footer />
        </>
    )
};


export default App;