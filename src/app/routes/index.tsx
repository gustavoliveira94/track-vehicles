import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Navigation } from 'app/components/Navigation';

import { ListVehicles } from 'app/pages/ListVehicles';
import { RegisterVehicles } from 'app/pages/RegisterVehicles';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ListVehicles />} />
        <Route path="/register-vehicles" element={<RegisterVehicles />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
};
