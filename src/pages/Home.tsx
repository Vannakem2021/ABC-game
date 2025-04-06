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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>ABC Game - Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h1>Welcome to ABC Game!</h1>
            <p>Please choose an option below:</p>

            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton
                    expand="block"
                    routerLink="/hello"
                    color="secondary"
                  >
                    Hello World Test Page
                  </IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonButton
                    expand="block"
                    routerLink="/alphabet"
                    color="primary"
                  >
                    Alphabet Game
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
