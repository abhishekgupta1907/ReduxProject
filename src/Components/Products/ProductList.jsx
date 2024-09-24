import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, clearPosts } from "./productSlice";
import "./PostsList.css"; // Import CSS file

function PostsList() {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);
    console.log(products);

    const clearPost = () => {
        dispatch(clearPosts());
    };

    const showPosts = () => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    };

    let content;
    if (status === "loading") {
        content = <p className="loading">Loading...</p>;
    } else if (status === "succeeded") {
        content = (
            <ul className="product-list">
                {products.map((post) => (
                    <li key={post.id} className="product-item">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="product-image"
                        />
                        <div className="product-details">
                            <h2 className="product-title">{post.title}</h2>
                            <p className="product-description">
                                {post.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        );
    } else if (status === "failed") {
        content = <p className="error-message">{error}</p>;
    }

    return (
        <div className="products-container">
            <h1 className="products-header">Products</h1>
            {content}
            {products.length === 0 && (
                <button className="products-button" onClick={showPosts}>
                    Show Products
                </button>
            )}
            {products.length > 0 && (
                <button
                    className="products-button clear-button"
                    onClick={clearPost}
                >
                    Clear Products
                </button>
            )}
        </div>
    );
}

export default PostsList;
