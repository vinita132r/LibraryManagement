import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Components/Homepgstyle.css';
import Mainhomepg from './Components/Mainhomepg';
//import Studentbooklist from './Components/Student/Studentbooklist';
import Studentlogin from './Components/Student/Studentlogin';
import Studentbookborrow from './Components/Student/Studentbookborrow';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainhomepg/>}/>
          <Route path='/studentlogin' element={<Studentlogin/>}/>
          <Route path='/studentbookborrow' element={<Studentbookborrow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
