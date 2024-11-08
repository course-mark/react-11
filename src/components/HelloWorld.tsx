import { useEffect } from "react"

const HelloWorld = ()=> {
  useEffect(()=>{
    console.log("Hi Hi")
    return () => {
      console.log("Bye bye")
    }

  },[])

    return (
      <h1 className="text-white">Hello World</h1>
    )
  }

  export default HelloWorld