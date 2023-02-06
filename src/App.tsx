import { css, Global } from '@emotion/react';
import TopNav from './layouts/top_nav';
import { Home } from './pages';
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
        `}
      />
      <Div position='fixed' zIndex='2'>
        <TopNav />
      </Div>
      <Home />
    </Div>
  );
}

export default App;
