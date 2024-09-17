import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, clearPosts } from "./commentsSlice"; // Corrected clearPosts import
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
                {comments.map((post) => (
                    <li key={post.id} style={{ marginBottom: "10px" }}>
                        <strong>Name:</strong> {post.name}
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
            <h1 style={{ marginTop: "100px" }}>Comments</h1>
            {content}
            {comments.length > 0 ? (
                ""
            ) : (
                <button onClick={showPosts}>Show Comments</button>
            )}

            {comments.length > 0 ? (
                <button onClick={clearPost}>Clear Comments</button>
            ) : (
                ""
            )}
        </div>
    );
}

export default CommentList;
