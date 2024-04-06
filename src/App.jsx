import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/Home'

import GiphyPage from './Components/Giphy'
import { QueryClient, QueryClientProvider } from 'react-query'
import FavoritesPage from './Components/Favorites'


const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/giphy' element={<GiphyPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
   </BrowserRouter>
   </QueryClientProvider>
  )
}

export default App
