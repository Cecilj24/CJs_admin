import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"

const User = () => {

    // Fetches data and send to single component
    return (
        <Single {...singleUser} />
    )
}

export default User