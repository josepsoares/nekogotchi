import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "tailwindcss/tailwind.css";
import "./theme/variables.css";
import "./theme/index.css";

import Home from "./pages/Home";
import Help from "./pages/Help";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";

setupIonicReact({
  mode: "md",
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>

        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/inventory" render={() => <Inventory />} />
        <Route path="/achievements" render={() => <Achievements />} />
        <Route path="/gallery" render={() => <Gallery />} />

        <Route component={NoMatch} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
