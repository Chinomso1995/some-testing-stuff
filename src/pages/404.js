import React, {useEffect, useMemo} from "react"
import { Link } from "gatsby"



const NotFoundPage = () => {
  const { data, loading } = useMemo(() => {
    return "Hello"
    }, [])
}

export default NotFoundPage

