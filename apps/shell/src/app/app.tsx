import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Auth = React.lazy(() => import('auth/Module'));

const SubApp2 = React.lazy(() => import('sub-app-2/Module'));

const SubApp1 = React.lazy(() => import('sub-app-1/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/sub-app-2">SubApp2</Link>
        </li>
        <li>
          <Link to="/sub-app-1">SubApp1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/sub-app-2" element={<SubApp2 />} />
        <Route path="/sub-app-1" element={<SubApp1 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
