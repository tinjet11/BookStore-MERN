import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books/create' element={<CreateBook />}></Route>
      <Route path='/books/details/:id' element={<ShowBook />}></Route>
      <Route path='/books/edit/:id' element={<EditBook />}></Route>
      <Route path='/books/delete/:id' element={<DeleteBook />}></Route>
    </Routes>
  )
}

export default App