import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonPage,
} from "@ionic/react";
import { camera } from "ionicons/icons";

import Header from "../components/common/Header";
import Tabs from "../components/common/Tabs";
import { usePhotoGallery } from "../utils/hooks/usePhotoGallery";

const Gallery = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <Header title="Photo Gallery" />

      <IonContent>
        <div className="px-8 md:px-32 min-h-full md:min-h-5/6 flex flex-col items-center justify-start md:justify-center w-full">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-8 pb-10">
            <div className="rounded-full shadow-md w-full h-full md: md:w-24 md:h-24 bg-orange-300 p-3">
              <IonImg
                className="object-scale-down"
                src="assets/img/purr-cat-in-the-pot.png"
                alt="purr magic"
              />
            </div>
            <div className="rounded-md shadow-md bg-white text-black p-5">
              <p>
                You can find here a place to take photos with me, and show me
                some cool places, you know. Not that I care
              </p>
            </div>
          </div>

          {!photos.length ? (
            <div className="p-8 lg:p-20 h-5/6 flex flex-col items-center justify-center">
              <IonImg
                className="w-80 h-auto"
                alt="purr magic"
                src="assets/img/purr-magic.png"
              />
              <h1 className="font-semibold text-orange-500 pb-4 text-4xl">
                You still haven't taken any photos!
              </h1>
              <p>
                What are you waiting for? Just get some photos taken and show
                neko the world around you!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4">
              {photos.map((photo, index) => (
                <div className="rounded-xl shadow-md w-32 h-32">
                  <IonImg
                    class="rounded-xl"
                    alt={`photo ${index}`}
                    src={photo.webviewPath}
                  />
                </div>
              ))}
            </div>
          )}

          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton
              className="h-14 w-14 lg:w-20 lg:h-20 mb-8"
              onClick={() => takePhoto()}
            >
              <IonIcon icon={camera} className="h-6 w-6 lg:w-8 lg:h-8" />
            </IonFabButton>
          </IonFab>
        </div>
      </IonContent>
      <Tabs />
    </IonPage>
  );
};

export default Gallery;
