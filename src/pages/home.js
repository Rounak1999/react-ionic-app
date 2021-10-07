import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent
    } from '@ionic/react';
    import React from 'react';
    
    function Home() {
       return (
         <IonContent>
           <IonCard>
           <IonCardHeader>
           <IonCardTitle>Welcome to Home Page</IonCardTitle>
           </IonCardHeader>
          </IonCard>
         </IonContent>
       );
    }
    
    
    export default Home;