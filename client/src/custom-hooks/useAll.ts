import { useState, useEffect } from 'react'
import axios, { Method } from 'axios'

const useAll = <T>(route: string, requestMethod: Method | undefined) => {
  const [data, setData] = useState<T[]>()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const finalResult = await axios({
          method: requestMethod,
          url: `http://localhost:3000/api/v1/${route}`,
          responseType: 'json',
        })
        setData(finalResult.data as T[])
      } catch (error: any) {
        console.log('error', error)
        setError(error)
      }
    }

    fetchData()
  }, [route, requestMethod])

  return [data, error]
}

export default useAll
