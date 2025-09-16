import { Routes, Route } from 'react-router-dom'
import ShoppingSyncDashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import ManageItemsPage from './pages/ManageItems'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<ShoppingSyncDashboard />} />
      <Route path="/items" element={<ManageItemsPage />} />
    </Routes>
  )
}

export default App
