import React from "react";
import {
  IonButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToggle,
  IonToolbar,
  useIonPopover,
} from "@ionic/react";
import { ellipsisVertical, help, logOut, moon } from "ionicons/icons";

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonList>
    <IonItem lines="none" button={true} detail={false} routerLink="/help">
      <IonIcon slot="start" icon={help} />
      <IonLabel>Help</IonLabel>
    </IonItem>
    <IonItem lines="none" button={true} routerLink="/" onClick={() => {}}>
      <IonIcon slot="start" icon={logOut} />
      <IonLabel>Logout</IonLabel>
    </IonItem>
    <IonItem lines="none">
      <IonIcon slot="start" icon={moon} />
      <IonLabel>Dark Mode</IonLabel>
      <IonToggle
        slot="end"
        name="darkMode"
        onIonChange={toggleDarkModeHandler}
      />
    </IonItem>
  </IonList>
);

const Header: React.FC<{ logout?: boolean; title: string }> = ({
  logout = true,
  title,
}) => {
  const [present, dismiss] = useIonPopover(PopoverList, {
    onHide: () => dismiss(),
  });

  return (
    <IonHeader>
      <IonToolbar className="px-8" color="primary">
        {logout && (
          <IonButton
            fill="clear"
            slot="end"
            color="light"
            onClick={(e) =>
              present({
                event: e.nativeEvent,
              })
            }
          >
            <IonIcon slot="icon-only" icon={ellipsisVertical} />
          </IonButton>
        )}

        <IonTitle className="text-left md:text-center">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
