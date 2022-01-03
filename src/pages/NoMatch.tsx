import {
  IonButton,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonText,
} from "@ionic/react";
import Header from "../components/common/Header";

const NoMatch = () => {
  return (
    <IonPage>
      <Header title="Not Found" />
      <IonContent fullscreen>
        <IonGrid>
          <IonImg alt="purr sad" src="assets/img/purr-fall-has-come.png" />
          <IonText>
            <h1>You found yourself in a place that doesn't exists!</h1>
          </IonText>
          <IonButton routerLink="/dashboard">
            Go back to the dashboard
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NoMatch;
