import './App.scss'
import HomePage from 'pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from 'utils/consts.ts'
import ArchivePage from 'pages/ArchivePage'

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <HomePage />
  },
  {
    path: PATHS.archive,
    element: <ArchivePage />
  }
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
