// src/App.tsx

import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import ConsentPage from './pages/ConsentPage';
import DataCollectionPage from './pages/DataCollectionPage';
import CapturedDataPage from './pages/CapturedDataPage';
import { IonApp, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/home">Home</IonItem>
              <IonItem routerLink="/scanner">Scanner</IonItem>
              <IonItem routerLink="/consent">Consent</IonItem>
              <IonItem routerLink="/data-collection">Data Collection</IonItem>
              <IonItem routerLink="/captured-data">Captured Data</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} />
          <Route path="/scanner" component={Scanner} />
          <Route path="/consent" component={ConsentPage} />
          <Route path="/data-collection" component={DataCollectionPage} />
          <Route path="/captured-data" component={CapturedDataPage} />
          <Redirect from="/" to="/home" exact />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
