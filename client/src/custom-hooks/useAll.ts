import { useState, useEffect } from 'react'
import axios, { Method, AxiosResponse } from 'axios'

const useAll = (route: string, requestMethod: Method | undefined) => {
  const [data, setData] = useState<AxiosResponse<any>>()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const finalResult = await axios({
          method: requestMethod,
          url: `http://localhost:3000/api/v1/${route}`,
          responseType: 'json',
        })
        const x = (response: AxiosResponse<any>) => {
          return setData(response)
        }
        x(finalResult)
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
