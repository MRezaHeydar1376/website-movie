import { css, Global } from '@emotion/react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import Footer from './layouts/footer';
import TopNav from './layouts/top_nav';
import { Home, TVSeries } from './pages';
import { Div } from './styles';

function App() {
  return (
    <Div>
      <Global
        styles={css`
          body{
            margin: 0;
            padding: 0;
            background:#0f0f0f;
          }
          a{
            text-decoration: none;
          }
        `}
      />
      <Div position='fixed' zIndex='2'>
        <TopNav />
      </Div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<TVSeries />} path="/tv-series" />
        <Route element={<TVSeries />} path="/movies" />
      </Routes>
      <Footer />
    </Div>
  );
}

export default App;
