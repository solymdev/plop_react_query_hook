import { useQuery } from 'react-query'
import { getAxiosInstance } from 'services/axios'
import { queryKeys } from '../reactQuery/queryKeys'

export async function getTestDataById(
  appState: any,
  testId: number,
): Promise<Response> {
  const { data } = await getAxiosInstance().get(
    `/test/${ testId }`,
  )
  return data
}

export function useGetTestDataById(
  appState: any,
  testId: number,
): any | undefined {
  const response  = useQuery([queryKeys.test, testId], () =>
    getTestDataById(appState, testId),
  )
  return response
}
