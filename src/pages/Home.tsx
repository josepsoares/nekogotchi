import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";

import Footer from "../components/common/Footer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className="h-full p-10 grid w-full md:w-3/4 lg:w-3/4 items-center mx-auto"
          style={{ gridTemplateRows: "1fr auto" }}
        >
          <div className="flex flex-col space-x-0 xl:flex-row xl:space-x-10 items-center pb-6 ">
            <IonImg className="" src="assets/img/purr-12.png" />

            <div>
              <h1 className="font-semibold text-orange-500 py-4 text-4xl">
                Welcome to nekogotchi!
              </h1>
              <p>
                This is a simple app inspired by <a>tamagotchis</a>, where you
                have your own digital cat pet and need to take care of it! Some
                actions you can perform include feeding, petting the cat. Also,
                you can take a walk and photos with it. But yeah, don't forget
                it... He will annoy very, very much if you don't pet or feed it!
              </p>
              <h4 className="font-semibold text-orange-500 pt-10 md:pt-4 pb-4 text-2xl">
                Embark now in this crazy cat journey
              </h4>
              <div className="flex flex-col  md:flex-row md:space-x-6 ">
                <IonButton routerLink="/dashboard">
                  Login with phone number
                </IonButton>
                <IonButton routerLink="/dashboard">Login with email</IonButton>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
