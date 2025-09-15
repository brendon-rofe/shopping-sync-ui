import { Routes, Route } from 'react-router-dom'
import ShoppingSyncDashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<ShoppingSyncDashboard />} />
    </Routes>
  )
}

export default App
