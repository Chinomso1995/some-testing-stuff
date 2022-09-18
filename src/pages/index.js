import React, {useEffect, useMemo} from "react"






const IndexPage = () => {
  const { data, loading } = useGet(() => {
    return "Hello"
    }, [])
  
}

export default IndexPage

