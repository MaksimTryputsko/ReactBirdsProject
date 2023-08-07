import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from '@view/App/App';
import { store } from '@store/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
