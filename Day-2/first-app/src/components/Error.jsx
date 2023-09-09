import { Link, useRouteError } from "react-router-dom"
import notFound from "../assets/not-found.svg"


const Error = () => {
  const error =  useRouteError()

  const {data, status, statusText} = error;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      {/* <h1>{status}</h1>
      <h2>{statusText}</h2>
      <p>{data}</p> */}
      <Link to="/" className="px-5 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">Home</Link>
      <img className="h-4/5" src={notFound}/>
    </div>
  )
}

export default Error