import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonText,
} from "@ionic/react";

const HelloWorld: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h1>Hello World!</h1>
        <p>This is a test page to debug the application.</p>

        <IonCard>
          <IonCardContent>
            <IonText color="primary">
              <h2>Test Card</h2>
            </IonText>
            <p>If you can see this, the app is rendering correctly.</p>

            <IonButton expand="block" color="secondary">
              Test Button
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HelloWorld;
