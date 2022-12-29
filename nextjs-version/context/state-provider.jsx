"use client"

import { useCreateStore, Provider } from '@context/store'


export default function StateProvider({ children }, pageProps) {

  const createStore = useCreateStore(pageProps.initialZustandState)
  return (
    <Provider createStore={createStore}>
      {children}
    </Provider>
  )
}