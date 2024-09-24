import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, clearPosts } from "./commentsSlice"; // Corrected clearPosts import
import "./CommentList.css"; // Import CSS file

function CommentList() {
    const dispatch = useDispatch();
    const { comments, status, error } = useSelector((state) => state.comments);

    const clearPost = () => {
        dispatch(clearPosts()); // Use dispatch directly
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
            <ul className="comment-list">
                {comments.map((post) => (
                    <li key={post.id} className="comment-item">
                        <strong className="comment-name">Name:</strong>{" "}
                        {post.name}
                        <p className="comment-body">
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
        <div className="comments-container">
            <h1 className="comments-header">Comments</h1>
            {content}
            {comments.length === 0 && (
                <button className="comments-button" onClick={showPosts}>
                    Show Comments
                </button>
            )}
            {comments.length > 0 && (
                <button
                    className="comments-button clear-button"
                    onClick={clearPost}
                >
                    Clear Comments
                </button>
            )}
        </div>
    );
}

export default CommentList;
