import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '@view/Layout/Layout';
import { WARM_UP_PAGE, MAIN_PAGE, ERROR_PAGE, END_GAME } from '@constans/path';

import { BirdSection } from '@containers/BirdSection/BirdSection';
import { ErrorPage } from '@view/ErrorPage/ErrorPage';
import { EndGame } from '@containers/EndGame/EndGame';
import { birdsRoutesConfig } from '@config/birdsRoutesConfig';

const BirdsPage: React.FC = () => (
  <>
    <Routes>
      <Route path={MAIN_PAGE} element={<Layout />}>
        <Route path={MAIN_PAGE} element={<Navigate replace to={WARM_UP_PAGE} />} />
        {birdsRoutesConfig.map((el) => (
          <Route
            key={Math.random()}
            path={el.path}
            element={<BirdSection url={el.nextPath} song={el.song} birds={el.birds} />}
          />
        ))}
        <Route path={END_GAME} element={<EndGame url={WARM_UP_PAGE} />} />
      </Route>
      <Route path={ERROR_PAGE} element={<ErrorPage />} />
    </Routes>
  </>
);

export { BirdsPage };
