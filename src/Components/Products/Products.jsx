import { Provider } from "react-redux";
import PostsList from "./ProductList";
import { productStore } from "./productStore";
function Products() {
    return (
        <Provider store={productStore}>
            <PostsList />
        </Provider>
    );
}
export default Products;
