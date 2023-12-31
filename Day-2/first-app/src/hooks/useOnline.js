import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = () => {
        setIsOnline(true);
    }

    const handleOffline = () => {
        setIsOnline(false);
    }

    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOffline);
            window.removeEventListener("offline", handleOnline);
        }
    }, [])


    return isOnline; // Returns true or false
}

export default useOnline