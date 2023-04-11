import { useState } from "react"
import { useEffect } from "react"


const useFetch=(url)=>{
    const [data, setData] = useState(null)
    const[isPending,setIsPending]=useState(true)
    const[error,setError]=useState(null)

    

    useEffect(()=>{
      const abortControl=new AbortController();
        fetch(url,{signal: abortControl.signal})
        .then(res=>{
          if(!res.ok){
            throw Error("requested data cannot be fetched right now");
          }
          return res.json()
        })
        .then(data=>{
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err=>{
          if(err.name==="AbortError"){
            console.log("fetch stopped")
          }
          setIsPending(false)
          setError(err.message)  
        })

        return ()=>abortControl.abort()
    
      },[url])


      return {data,isPending,error}
}
export default useFetch