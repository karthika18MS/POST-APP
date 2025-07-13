import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import SearchPost from './components/SearchPost';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<AddPost/>}/>
        <Route path="/search" element={<SearchPost/>}/>
        <Route path="/delete" element={<DeletePost/>}/>
        <Route path="/view" element={<ViewPost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
