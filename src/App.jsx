import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";
import Products from "./Components/Products/Products";
import Navbar from "./Navbar";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
const HomePage = () => {
    return (
        <div style={{ marginTop: "100px" }}>
            <p>Welcome to the Home Page!</p>
        </div>
    );
};
