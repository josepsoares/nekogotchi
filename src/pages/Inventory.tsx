import { IonContent, IonImg, IonPage } from "@ionic/react";

import Header from "../components/common/Header";
import Tabs from "../components/common/Tabs";

interface IInventoryProps {}

const Inventory: React.FC<IInventoryProps> = () => {
  return (
    <IonPage>
      <Header title="Inventory" />

      <IonContent>
        <div className="p-8 lg:p-20 h-5/6 flex flex-col items-center justify-center">
          <IonImg
            className="w-80 h-auto"
            alt="purr magic"
            src="assets/img/purr-magic.png"
          />
          <h1 className="font-semibold text-orange-500 pb-4 text-4xl">
            This page is still in development!
          </h1>
          <p>Please wait for the developer to do some magic and implement it</p>
        </div>
      </IonContent>
      <Tabs />
    </IonPage>
  );
};

export default Inventory;
