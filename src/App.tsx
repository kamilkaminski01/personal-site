import './App.scss'
import HomePage from 'pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import { PATHS } from 'utils/consts'
import ArchivePage from 'pages/ArchivePage'
import MouseGradient from 'components/atoms/MouseGradient'

function App() {
  return (
    <div className="app">
      <MouseGradient />
      <Routes>
        <Route path={PATHS.home} element={<HomePage />} />
        <Route path={PATHS.archive} element={<ArchivePage />} />
      </Routes>
    </div>
  )
}

export default App
