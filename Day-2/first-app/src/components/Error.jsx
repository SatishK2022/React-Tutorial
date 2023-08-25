import { useRouteError } from "react-router-dom"


const Error = () => {
  const error =  useRouteError()

  const {data, status, statusText} = error;

  return (
    <>
      <h1>{status}</h1>
      <h2>{statusText}</h2>
      <p>{data}</p>
    </>
  )
}

export default Error