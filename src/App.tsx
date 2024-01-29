import './App.scss'
import HomePage from 'pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import { PATHS } from 'utils/consts.ts'
import ArchivePage from 'pages/ArchivePage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={PATHS.home} element={<HomePage />} />
        <Route path={PATHS.archive} element={<ArchivePage />} />
      </Routes>
    </div>
  )
}

export default App
