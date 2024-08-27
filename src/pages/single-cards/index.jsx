import { useParams } from "react-router-dom"
const Index = () => {
  const {id} = useParams()
  return (
    <div className="d-flex align-items-center justify-content-center bg-success text-white">
      <h1><b>ID: {id}</b></h1>
    </div>
  )
}

export default Index