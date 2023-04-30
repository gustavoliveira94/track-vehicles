import { Route, Routes, BrowserRouter } from 'react-router-dom'

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/list-vehicles" element={<h1>Teste</h1>} />
            </Routes>
        </BrowserRouter>
    )
}