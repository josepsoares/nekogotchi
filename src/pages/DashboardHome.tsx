import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonProgressBar,
} from "@ionic/react";
import { bed, fastFood, fitness, happy } from "ionicons/icons";
import Header from "../components/common/Header";

const DashboardHome = () => {
  return (
    <IonContent>
      <Header title="Dashboard" />
      <div className="p-8 h-5/6 flex flex-row items-center justify-center">
        <IonImg
          className="w-64 h-auto"
          src="./assets/img/purr-sitting-cat-5.png"
        />
        <div className="flex flex-col space-x-4">
          <IonItem button onClick={() => {}}>
            <IonIcon icon={fastFood} slot="start" />
            <IonLabel>Food</IonLabel>
            <IonProgressBar color="primary" value={0.5}></IonProgressBar>
          </IonItem>
          <IonItem button onClick={() => {}}>
            <IonIcon icon={happy} slot="start" />
            <IonLabel>Hapiness</IonLabel>
            <IonProgressBar color="primary" value={0.5}></IonProgressBar>
          </IonItem>
          <IonItem button onClick={() => {}}>
            <IonIcon icon={fitness} slot="start" />
            <IonLabel>Fitness</IonLabel>
            <IonProgressBar color="primary" value={0.5}></IonProgressBar>
          </IonItem>
          <IonItem button onClick={() => {}}>
            <IonIcon icon={bed} slot="start" />
            <IonLabel>Sleep</IonLabel>
            <IonProgressBar color="primary" value={0.5}></IonProgressBar>
          </IonItem>
        </div>
      </div>
    </IonContent>
  );
};

export default DashboardHome;
