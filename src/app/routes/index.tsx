import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { ListVehicles } from 'app/pages/ListVehicles';
import { RegisterVehicles } from 'app/pages/RegisterVehicles';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list-vehicles" element={<ListVehicles />} />
        <Route path="/register-vehicles" element={<RegisterVehicles />} />
      </Routes>
    </BrowserRouter>
  );
};
