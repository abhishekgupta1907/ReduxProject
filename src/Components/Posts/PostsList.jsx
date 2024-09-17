import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, clearPosts } from "./postsSlice";

function PostsList() {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.posts);

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
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: "10px" }}>
                        <strong>Title:</strong> {post.title}
                        <p>
                            <strong>Body:</strong> {post.body}
                        </p>
                    </li>
                ))}
            </ul>
        );
    } else if (status === "failed") {
        content = <p>{error}</p>;
    }

    return (
        <div>
            <h1 style={{ marginTop: "100px" }}>Posts</h1>
            {content}
            {posts.length > 0 ? (
                ""
            ) : (
                <button onClick={showPosts}>Show Posts</button>
            )}

            {posts.length > 0 ? (
                <button onClick={clearPost}>Clear Posts</button>
            ) : (
                ""
            )}
        </div>
    );
}

export default PostsList;
