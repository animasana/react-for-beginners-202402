import {
  BrowserRouter as BRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';
import { REPOSITORY } from '../constants';

export default function Router() {
  return (
    <BRouter basename={`${process.env.PUBLIC_URL}${REPOSITORY}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </BRouter>
  );
}