import React from 'react';
import { IonApp, IonMenu ,IonContent,IonList, IonItem,IonRouterOutlet } from '@ionic/react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';

const App = () => {
  return (
    <IonApp>
      <IonMenu side="start" menuId="first" >
        <Header />
        <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
      </IonMenu>
      <IonRouterOutlet></IonRouterOutlet>
      
      <Home />
      <Footer />
    </IonApp>
  );
}

export default App;
