import React from 'react';

import Navbar from './components/navbar'
import PathRoutes from './rotas';

function App() {
  return (
    <>
      <div className = "container">
          <Navbar />,
          <PathRoutes />
      </div>

    </>
  );
}

export default App;
