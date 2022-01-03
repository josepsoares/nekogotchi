import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { bag, home, images, star } from "ionicons/icons";

const Tabs = () => {
  const tabs = [
    {
      icon: home,
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      icon: bag,
      href: "/inventory",
      label: "Inventory",
    },
    {
      icon: star,
      href: "/achievements",
      label: "Achievements",
    },
    {
      icon: images,
      href: "/gallery",
      label: "Gallery",
    },
  ];

  return (
    <IonTabBar color="primary" className="p-4" slot="bottom">
      {tabs.map((item, i) => (
        <IonTabButton href={item.href} key={i} tab={item.label}>
          <IonIcon icon={item.icon} className="h-6 w-6 " />
          <IonLabel>{item.label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  );
};

export default Tabs;
