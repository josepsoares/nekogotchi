import { IonFooter, IonTitle } from "@ionic/react";

const Footer = () => {
  return (
    <IonFooter className="border-none w-100 py-8">
      <IonTitle className="w-100 text-center font-normal text-xs text-gray-500">
        <p>nekogotchi - {new Date().getFullYear()}</p>
        <p>
          Purr illustrations by{" "}
          <a
            className="text-orange-400 underline"
            href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6"
          >
            Icons 8
          </a>{" "}
          from{" "}
          <a
            className="text-orange-400 underline"
            href="https://icons8.com/illustrations"
          >
            Ouch!
          </a>
        </p>
        <p>
          This project was developed using the{" "}
          <a
            className="text-orange-400 underline"
            href="https://ionicframework.com"
          >
            Ionic Framework{" "}
          </a>
        </p>
        <p>
          <a
            className="text-orange-400 underline"
            href="https://josepsoares.vercel.app/"
          >
            Built by josepsoares ©
          </a>
        </p>
      </IonTitle>
    </IonFooter>
  );
};

export default Footer;
