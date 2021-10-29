import {useState, useEffect} from "react";

const useEffectHook = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    // console.log(res);
                    if (!res.ok) {
                        throw Error("could not fetch the api");
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1000)
    }, []);

    return {data, isPending, error}
}

export default useEffectHook;