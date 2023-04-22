import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import SearchNews from './container/SearchNews';
import NewsFeed from './container/NewsFeed';
import './assets/scss/app.scss';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<SearchNews />} path="/" />
        <Route element={<NewsFeed />} path="/news" />
        <Route element={<Navigate to='/' />} path="*" />
      </Routes>
    </Provider>
  );
}

export default App;