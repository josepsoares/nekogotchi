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
import { useDeviceInfo } from "../utils/hooks/useDeviceInfo";
import { useLocation } from "../utils/hooks/useLocation";

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  const [showFeedModal, setShowFeedModal] = useState(false);
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const { location } = useLocation();
  const { deviceInfo, batteryInfo } = useDeviceInfo();

  console.log(deviceInfo, batteryInfo, location);

  return (
    <IonPage>
      <Header title="Dashboard" />

      <IonContent>
        <div className="min-h-full md:min-h-5/6 px-4 md:px-32 flex flex-col items-center justify-start md:justify-center gap-y-10 gap-x-0 md:flex-row md:gap-x-16 lg:gap-x-24 md:gap-y-0 ">
          <div className="flex flex-col items-center gap-y-8">
            <IonImg
              className="w-auto h-full md:h-60 lg:h-80"
              src="./assets/img/purr-cat-22.png"
            />
            <IonButton
              onClick={() => setShowMessageModal(!showMessageModal)}
              size="large"
              shape="round"
              fill="solid"
            >
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
            <h2>Status</h2>
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
        isOpen={showMessageModal}
        onDidDismiss={() => setShowMessageModal(false)}
      >
        <IonContent>
          <div className="px-0 md:px-10 pb-0">
            <IonImg className="pb-6" src="./assets/img/purr-cats-muzzle.png" />

            <h2 className="pb-6">Hello there, beautiful person</h2>

            {(deviceInfo?.platform === "android" ||
              deviceInfo?.platform === "ios") && (
              <p className="pb-2">
                I see you're seeing me with your {deviceInfo?.platform} phone
              </p>
            )}
            <p className="pb-2">
              Also, I can your current coordinates as well:
            </p>
            <p>
              <b>altitude:</b> {location?.coords.altitude}
            </p>
            <p>
              <b>latitude:</b> {location?.coords.latitude}
            </p>
            <p>
              <b>longitude:</b> {location?.coords.longitude}
            </p>

            <div className="flex justify-end pt-6">
              <IonButton onClick={() => setShowMessageModal(false)}>
                Close
              </IonButton>
            </div>
          </div>
        </IonContent>
      </IonModal>

      <IonModal
        isOpen={showFeedModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 1]}
        onDidDismiss={() => setShowFeedModal(false)}
      >
        <IonContent>
          <div className="px-0 md:px-10 pb-0">
            <h2 className="pb-6">Food</h2>

            <IonItem>
              <IonIcon slot="start" icon={fish} />
              <IonLabel>Tuna - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={fish} />
              <IonLabel>Sardine - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={fastFood} />
              <IonLabel>Lasagna - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={fastFood} />
              <IonLabel>Fried Chicken - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={fastFood} />
              <IonLabel>Cat Ration - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>

            <div className="flex justify-center pt-6">
              <IonButton disabled={true}>Feed</IonButton>
            </div>
          </div>
        </IonContent>
      </IonModal>

      <IonModal
        isOpen={showPlayModal}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 1]}
        onDidDismiss={() => setShowPlayModal(false)}
      >
        <IonContent>
          <div className="px-0 md:px-10 pb-0">
            <h2 className="pb-6">Playtime</h2>

            <IonItem>
              <IonIcon slot="start" icon={fish} />
              <IonLabel>Ball of Wool - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={fish} />
              <IonLabel>Rat Toy - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={fastFood} />
              <IonLabel>Scratcher - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={fastFood} />
              <IonLabel>Feather Teaser - x10</IonLabel>
              <IonButton slot="end">Select</IonButton>
            </IonItem>

            <div className="flex justify-center pt-6">
              <IonButton disabled={true}>Play</IonButton>
            </div>
          </div>
        </IonContent>
      </IonModal>
      <Tabs />
    </IonPage>
  );
};

export default Dashboard;
