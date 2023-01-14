import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './HomePage';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
