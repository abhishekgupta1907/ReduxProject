import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, clearPosts } from "./postsSlice";
import "./PostsList.css"; // Import CSS file

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
        content = <p className="loading">Loading...</p>;
    } else if (status === "succeeded") {
        content = (
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <strong className="post-title">Title:</strong>{" "}
                        {post.title}
                        <p className="post-body">
                            <strong>Body:</strong> {post.body}
                        </p>
                    </li>
                ))}
            </ul>
        );
    } else if (status === "failed") {
        content = <p className="error-message">{error}</p>;
    }

    return (
        <div className="posts-container">
            <h1 className="posts-header">Posts</h1>
            {content}
            {posts.length === 0 && (
                <button className="posts-button" onClick={showPosts}>
                    Show Posts
                </button>
            )}
            {posts.length > 0 && (
                <button
                    className="posts-button clear-button"
                    onClick={clearPost}
                >
                    Clear Posts
                </button>
            )}
        </div>
    );
}

export default PostsList;
