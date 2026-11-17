import React from "react";
import { Navigate, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Blank from "./pages/blank";
import Notfound from "./pages/Notfound";
import Detail from "./pages/Detail";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Navigate to="/blank" replace />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route path="/menu/:kodeMenu" element={<Detail />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
