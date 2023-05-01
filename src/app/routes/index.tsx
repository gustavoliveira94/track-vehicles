import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { ListVehicles } from 'app/pages/ListVehicles';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list-vehicles" element={<ListVehicles />} />
      </Routes>
    </BrowserRouter>
  );
};
