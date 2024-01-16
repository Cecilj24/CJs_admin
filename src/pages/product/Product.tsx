import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

const Product = () => {

    // Fetches data and send to single component
    return (
        <Single {...singleProduct} />
    )
}

export default Product