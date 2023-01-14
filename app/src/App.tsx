import { BrowserRouter, Route } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './HomePage';
function App() {
    return (
        <BrowserRouter>
            <Route path="/" element={<HomePage />} />
            <Route element={<NotFoundPage />} />
        </BrowserRouter>
    );
}

export default App;
