import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Learning React!!")
        }, 1000)

        console.log("UseEffect")

        return () => {
            console.log("useEffect Return")
            clearInterval(timer)
        }
    }, [])

    console.log("Render")

    return (
        <>
            <h1>Profile</h1>
            <h2>Name: {props.name}</h2>
            <p>Desig: {props.desig}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(1)}>Count</button>
        </>
    )
}

export default Profile;