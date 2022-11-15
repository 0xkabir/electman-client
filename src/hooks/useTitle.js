import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - ElectMan`
    }, [title])
}

export default useTitle