import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, clearPosts } from "./productSlice";

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
        content = <p>Loading...</p>;
    } else if (status === "succeeded") {
        content = (
            <ul
                style={{
                    listStylePosition: "inside",
                    margin: "5px",
                    padding: 0,
                    listStyle: "none",
                }}
            >
                {products.map((post) => (
                    <li key={post.id} style={{ marginBottom: "10px" }}>
                        <strong>Title:</strong> {post.title}
                        <p>{post.description}</p>
                        <img src={post.image} alt="" height={300} width={300} />
                    </li>
                ))}
            </ul>
        );
    } else if (status === "failed") {
        content = <p>{error}</p>;
    }

    return (
        <div>
            <h1 style={{ marginTop: "100px" }}>Products</h1>
            {content}
            {products.length > 0 ? (
                ""
            ) : (
                <button onClick={showPosts}>Show Products</button>
            )}

            {products.length > 0 ? (
                <button onClick={clearPost}>Clear Products</button>
            ) : (
                ""
            )}
        </div>
    );
}

export default PostsList;
