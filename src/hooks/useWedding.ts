import { getWedding } from '@/api/wedding'
import { Wedding } from '@/models/wedding'
import { useQuery } from 'react-query'

function useWedding() {
  const { data, isLoading, error } = useQuery<Wedding>(
    ['wedding'],
    () =>
      getWedding().then((response) => {
        if (!response.ok) {
          throw new Error('데이터를 불러오지 못했습니다')
        }

        return response.json()
      }),
    {
      suspense: true,
    },
  )

  return { wedding: data, isLoading, error }
}

export default useWedding
