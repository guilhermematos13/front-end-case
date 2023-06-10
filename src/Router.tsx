import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ResultsCenter } from './pages/ResultsCenter/index';
import { EsgContent } from './pages/ EsgContent';
import { List } from './pages/List';
import { DefaultLayout } from './pages/layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/central-de-resultados" element={<ResultsCenter />} />
        <Route path="/conteudo-esg" element={<EsgContent />} />
        <Route path="/lista" element={<List />} />
      </Route>
    </Routes>
  );
}
