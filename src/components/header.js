import {
    IonHeader,
    IonTitle,
    IonToolbar,

} from '@ionic/react';
import React from 'react';

function Header() {

    return (
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle>My Navigation Bar</IonTitle>
                </IonToolbar>
            </IonHeader>
            
    );

}
export default Header;