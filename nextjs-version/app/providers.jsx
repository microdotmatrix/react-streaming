import StateProvider from '@context/state-provider'

export default function Providers({ children }) {
  return <StateProvider>{children}</StateProvider>
}