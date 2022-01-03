import {
  IonBadge,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonText,
  IonTitle,
  IonModal,
} from "@ionic/react";
import {
  bed,
  chatbubble,
  dice,
  fastFood,
  fish,
  fitness,
  flash,
  happy,
} from "ionicons/icons";
import { useState } from "react";
import Header from "../components/common/Header";
import Tabs from "../components/common/Tabs";

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  const [showFeedModal, setShowFeedModal] = useState(false);
  const [showPlayModal, setShowPlayModal] = useState(false);

  return (
    <IonPage>
      <Header title="Dashboard" />

      <IonContent>
        <div className="min-h-full md:min-h-5/6 px-8 md:px-32 flex flex-col items-center justify-start md:justify-center gap-y-10 gap-x-0 md:flex-row md:gap-x-16 lg:gap-x-24 md:gap-y-0 ">
          <div className="flex flex-col items-center gap-y-8">
            <IonImg
              className="w-auto h-full md:h-60 lg:h-80"
              src="./assets/img/purr-cat-22.png"
            />
            <IonButton size="large" shape="round" fill="solid">
              <IonText className="pl-4">nekomessage</IonText>
              <IonIcon slot="start" size="large" icon={chatbubble} />
              <IonBadge
                color="warning"
                style={{ position: "absolute", top: "9%", left: "5%" }}
              >
                1
              </IonBadge>
            </IonButton>
          </div>

          <div className="flex flex-col gap-y-4 w-full md:w-1/2">
            <IonTitle>Status</IonTitle>
            <IonText>
              Everything is ok with your neko, but still, it wouldn't hurt to
              give it some food and time to play with it...
            </IonText>
            <IonItem onClick={() => {}}>
              <IonIcon
                className="w-6 h-6 md:h-10 md:w-10"
                icon={fastFood}
                slot="start"
              />
              <div className="w-full py-4">
                <IonLabel className="pb-3">Food - 50%</IonLabel>
                <IonProgressBar color="primary" value={0.5}></IonProgressBar>
              </div>
            </IonItem>

            <IonItem onClick={() => {}}>
              <IonIcon
                className="w-6 h-6 md:h-10 md:w-10"
                icon={happy}
                slot="start"
              />
              <div className="w-full py-4">
                <IonLabel className="pb-3">Hapiness - 50%</IonLabel>
                <IonProgressBar color="primary" value={0.5}></IonProgressBar>
              </div>
            </IonItem>

            <IonItem onClick={() => {}}>
              <IonIcon
                className="w-6 h-6 md:h-10 md:w-10"
                icon={fitness}
                slot="start"
              />
              <div className="w-full py-4">
                <IonLabel className="pb-3">Fitness - 50%</IonLabel>
                <IonProgressBar color="primary" value={0.5}></IonProgressBar>
              </div>
            </IonItem>

            <IonItem className="p-0" onClick={() => {}}>
              <IonIcon
                className="w-6 h-6 md:h-10 md:w-10"
                icon={bed}
                slot="start"
              />
              <div className="w-full py-4">
                <IonLabel className="pb-3">Energy - 50%</IonLabel>
                <IonProgressBar color="primary" value={0.5}></IonProgressBar>
              </div>
            </IonItem>
          </div>
        </div>

        <IonFab
          vertical="bottom"
          horizontal="start"
          slot="fixed"
          className="mb-8 ml-4"
        >
          <IonFabButton
            className="h-14 w-14 lg:w-20 lg:h-20"
            onClick={() => {}}
          >
            <IonIcon icon={flash} className="h-6 w-6 lg:w-10 lg:h-10" />
          </IonFabButton>
          <IonFabList side="top" className="mb-16 lg:mb-24">
            <IonFabButton
              color="secondary"
              className="h-14 w-14 lg:w-20 lg:h-20"
              onClick={() => setShowFeedModal(!showFeedModal)}
            >
              <IonIcon icon={fish} className="h-6 w-6 lg:w-10 lg:h-10" />
            </IonFabButton>
            <IonFabButton
              color="secondary"
              className="h-14 w-14 lg:w-20 lg:h-20"
              onClick={() => setShowPlayModal(!showPlayModal)}
            >
              <IonIcon icon={dice} className="h-6 w-6 lg:w-10 lg:h-10" />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>

      <IonModal
        isOpen={showFeedModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 1]}
        onDidDismiss={() => setShowFeedModal(false)}
      >
        <p>This is modal content</p>
      </IonModal>

      <IonModal
        isOpen={showPlayModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 1]}
        onDidDismiss={() => setShowPlayModal(false)}
      >
        <p>This is modal content</p>
      </IonModal>
      <Tabs />
    </IonPage>
  );
};

export default Dashboard;
