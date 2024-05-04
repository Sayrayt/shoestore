
import MyProvider from './Context.js';

import { Route, Routes } from 'react-router-dom';
import router from "./routes/router";

import './App.scss';

function App() {
  const routeComponents = router.map(({ path, element }, key) => <Route path={path} element={element} key={key} />);
  return (
    <MyProvider>
      <div className="App">
        <Routes>
          {routeComponents}
        </Routes>
      </div>
    </MyProvider>

  );
}

export default App;
