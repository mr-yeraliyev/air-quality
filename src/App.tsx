// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch, RouteProps } from 'react-router-dom';
import routes from './routes';
const App = (): React.ReactNode => {
  return (
    <Router>
      <Switch>
        {routes.map((route: RouteProps, index: number) => (
          <Route
            key={index}
            {...route}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
