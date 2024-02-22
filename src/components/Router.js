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
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
      </Routes>
    </BRouter>
  );
}