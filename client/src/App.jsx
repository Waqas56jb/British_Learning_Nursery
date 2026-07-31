import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import './App.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
