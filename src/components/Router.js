import {
  BrowserRouter as BRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';

export default function Router() {
  return (
    <BRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </BRouter>
  );
}