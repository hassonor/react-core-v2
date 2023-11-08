import { FC, ReactElement } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail: FC = (): ReactElement => {
    const params = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </>
    )

}

export default ProductDetail;
