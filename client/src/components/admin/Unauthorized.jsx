import { useNavigate } from "react-router-dom"
import "../../../styles/admin/cfmDelete.scss"
function Unauthorized() {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const handleClose = () => {
        goBack()
    }
  return (
   <div className="comment-div">
    <h3>You are not authorized to perform this action.</h3>
    <button onClick={handleClose}>Close</button>
   </div>
  )
}

export default Unauthorized