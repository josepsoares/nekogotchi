import {
  IonActionSheet,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonModal,
  IonPage,
} from "@ionic/react";
import { camera, close, trash, trashBin } from "ionicons/icons";
import { useState } from "react";

import Header from "../components/common/Header";
import Tabs from "../components/common/Tabs";
import { usePhotoGallery, UserPhoto } from "../utils/hooks/usePhotoGallery";

const Gallery = () => {
  const { photos, takePhoto, deletePhoto, modal, modalImg, setModal } =
    usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [photoModal, setPhotoModal] = useState<{
    isOpen: boolean;
    item: UserPhoto | any;
  }>({ isOpen: false, item: "" });

  return (
    <IonPage>
      <Header title="Photo Gallery" />

      <IonContent>
        <div className="px-4 md:px-32 min-h-full md:min-h-5/6 flex flex-col items-start justify-start md:justify-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-y-0 gap-x-0 md:gap-x-8 pb-10 w-full">
            <IonImg
              className="object-contain object-center"
              src="assets/img/purr-cats-muzzle.png"
              alt="purr magic"
            />
            <div className="rounded-md shadow-md bg-gray-200 text-black p-5">
              <p>
                You can find here a place to take photos with me, and show me
                some cool places, you know. Not that I care. Still, I might have
                something to say about your photos...
              </p>
            </div>
          </div>

          <h2 className="pb-6">Your Photos</h2>

          {!photos.length ? (
            <div className="flex flex-col items-center justify-center">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full">
              {photos.map((photo, index) => (
                <div key={index} className="shadow-md relative">
                  <IonIcon
                    color="danger"
                    style={{ position: "absolute", top: "5%", left: "80.5%" }}
                    slot="start"
                    icon={trashBin}
                    size="large"
                    onClick={() => setPhotoToDelete(photo)}
                  />
                  <IonImg
                    class="w-auto h-60 md:h-full object-cover"
                    onClick={() =>
                      setPhotoModal({ isOpen: !photoModal.isOpen, item: photo })
                    }
                    alt={`photo ${index}`}
                    src={photo.webviewPath}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            className="h-14 w-14 lg:w-20 lg:h-20 mb-8 mr-8"
            onClick={() => takePhoto()}
          >
            <IonIcon icon={camera} className="h-6 w-6 lg:w-8 lg:h-8" />
          </IonFabButton>
        </IonFab>

        <IonModal
          isOpen={photoModal.isOpen}
          onDidDismiss={() =>
            setPhotoModal({ isOpen: !photoModal.isOpen, item: "" })
          }
          initialBreakpoint={0.5}
          breakpoints={[0, 0.5, 1]}
        >
          <IonContent>
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-8 pb-10 w-full">
              <IonImg
                className="w-auto h-32 object-center"
                src={modalImg?.reaction?.reactionImg}
                alt="neko reaction image"
              />
              <div className="rounded-md shadow-md bg-white text-black p-5">
                <p>{modalImg?.reaction?.message}</p>
              </div>
            </div>
          </IonContent>
        </IonModal>

        <IonModal
          isOpen={modal}
          onDidDismiss={() => setModal(!modal)}
          initialBreakpoint={0.5}
          breakpoints={[0, 0.5, 1]}
        >
          <IonContent>
            <h1 className="pb-6">Photo taken!</h1>
            <div className="w-full pb-6">
              <IonImg src={modalImg?.webviewPath} />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-8 pb-32 w-full">
              <IonImg
                className="w-auto h-32 object-center"
                src={modalImg?.reaction?.reactionImg}
                alt="neko reaction image"
              />
              <div className="rounded-md shadow-md bg-white text-black p-5">
                <p>{modalImg?.reaction?.message}</p>
              </div>
            </div>
          </IonContent>
        </IonModal>

        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
      <Tabs />
    </IonPage>
  );
};

export default Gallery;
