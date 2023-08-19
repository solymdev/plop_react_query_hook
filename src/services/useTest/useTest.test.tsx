import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import { useGetTestDataById } from './useTest'

import INITIAL_APP_STATE from 'storage/state/appState'
import datatest from '../../../mockServer/data/testData.json'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

beforeAll(() => {
  jest.mock('axios', () => {
    const mAxiosInstance = {
      get: jest.fn().mockResolvedValue({
        data: datatest,
      }),
    }
    return {
      create: jest.fn(() => mAxiosInstance),
    }
  })
})

test('customHook returns correct data', async () => {
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  const { result, waitFor } = renderHook(
    () => useGetTestDataById(INITIAL_APP_STATE, 1),
    { wrapper },
  )

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data).toEqual(datatest.test[0])
})
