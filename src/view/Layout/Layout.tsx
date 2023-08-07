import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Layout.module.scss';

import {
  WARM_UP_PAGE,
  SPARROW_PAGE,
  SINGERS_BIRDS_PAGE,
  FORESTS_BIRDS_PAGE,
  PREDATORY_BIRDS_PAGE,
  MARINE_BIRDS,
} from '@constans/path';
import { type IStatePoints } from './Layout.interface';
import { P } from '@shared/PTextComponent/P';
const Layout: React.FC = () => {
  const points: number = useSelector((state: IStatePoints) => state.points);
  return (
    <>
      <header>
        <div className={styles.upHeader}>
          <div>
            <div className={styles.logo}></div>
          </div>
          <div className={styles.score}>
            <P size="M">Score: {points}</P>
          </div>
        </div>
        <ul className={styles.allBirds}>
          <NavLink to={WARM_UP_PAGE}>
            <P size="S">Разминка</P>
          </NavLink>

          <NavLink to={SPARROW_PAGE}>
            <P size="S">Воробьиные</P>
          </NavLink>

          <NavLink to={FORESTS_BIRDS_PAGE}>
            <P size="S">Лесные птицы</P>
          </NavLink>

          <NavLink to={SINGERS_BIRDS_PAGE}>
            <P size="S">Певчие птицы</P>
          </NavLink>

          <NavLink to={PREDATORY_BIRDS_PAGE}>
            <P size="S">Хищные птицы</P>
          </NavLink>

          <NavLink to={MARINE_BIRDS}>
            <P size="S">Морские птицы</P>
          </NavLink>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export { Layout };
