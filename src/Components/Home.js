import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './home.css';
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Contact from "./Pages/Contact";
import NewsDisplay from "./Pages/NewsDisplay";

function Home() {
    return (
        <>
            <div className='home-wrapper'>
                <Header />
                <main className='container'>
                    <Routes>
                        <Route path="/" element={<NewsDisplay />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>
                    </Routes>
                </main>
                <Footer />
            </div>

        </>
    )
};
export default Home;