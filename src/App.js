import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Components/Homepgstyle.css';
import Mainhomepg from './Components/Mainhomepg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainhomepg/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
