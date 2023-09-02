import { createContext } from "react";

const userContext = createContext({
    user: {
        name: "Satish Kumar",
        email: "satish@gmail.com"
    }
})


export default userContext;