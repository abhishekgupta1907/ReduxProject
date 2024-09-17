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
            <h1>Welcome to the Home Page!</h1>
            <h3>
                When you Click On Posts You Can See The content Related Posts
            </h3>
            <h3>
                When you Click On Commets You Can See The content Related
                Comments
            </h3>
            <h3>
                When you Click On Products You Can See The content Related
                Products
            </h3>
        </div>
    );
};
