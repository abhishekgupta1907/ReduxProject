import { Provider } from "react-redux";
import CommentList from "./CommentList";
import { commentStore } from "./commentStore";
function Comments() {
    return (
        <Provider store={commentStore}>
            <CommentList />
        </Provider>
    );
}
export default Comments;
