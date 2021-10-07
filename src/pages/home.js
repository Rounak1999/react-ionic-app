import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonCardContent
    } from '@ionic/react';
    import React from 'react';
    import GridExample from './aggrid';
    
    function Home() {
       return (
         <IonContent>
           <IonCard>
           <IonCardHeader>
           <IonCardTitle>Welcome to Home Page</IonCardTitle>
           </IonCardHeader>
           <IonCardContent>
             <GridExample />
           </IonCardContent>
          </IonCard>
         </IonContent>
       );
    }
    
    
    export default Home;