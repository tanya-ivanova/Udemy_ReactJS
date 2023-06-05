import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            <Link to=".." relative="route">Back (route)</Link>
            <br/>
            <Link to=".." relative="path">Back (path)</Link>
        </>
    );
}

export default ProductDetailPage;