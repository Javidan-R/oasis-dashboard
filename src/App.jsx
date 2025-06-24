import GlobalStyles from '@styles/GlobalStyles'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {QueryClient ,QueryClientProvider} from '@tanstack/react-query';
import {
  Dashboard,
  // Bookings,
  Cabins,
  Users,
  Settings,
  Accounts,
  Login,
  PageNotFound
} from '@pages';
import AppLayout from '@ui/AppLayout'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
export default function App() {

  return (
   <QueryClientProvider client={queryClient}>
   <GlobalStyles/>
    <BrowserRouter> 
      <Routes>
       <Route element={<AppLayout/>}>
        <Route index  element={<Navigate replaceto="dashboard"/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/bookings" element={<Bookings />} /> */}
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/accounts" element={<Accounts />} />
        
       </Route>
       <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
   </QueryClientProvider>
  )
}
