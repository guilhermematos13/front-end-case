import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ResultsCenter } from './pages/ResultsCenter/index';
import { DefaultLayout } from './pages/layouts/DefaultLayout';
import { Company } from './pages/Company';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/central-de-resultados" element={<ResultsCenter />} />
        <Route path="/a-companhia" element={<Company />} />
      </Route>
    </Routes>
  );
}
