import { Provider } from "react-redux";
import PostsList from "./PostsList";
import { postStore } from "./postStore";
function Posts() {
    return (
        <Provider store={postStore}>
            <PostsList />
        </Provider>
    );
}
export default Posts;
