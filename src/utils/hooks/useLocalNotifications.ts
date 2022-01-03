import { LocalNotifications } from "@capacitor/local-notifications";

export function useNotifications() {
  const schedule = async (
    title: string,
    body: string,
    i: number,
    hour: number,
    minute: number
  ) => {
    try {
      // Request/ check permissions
      if (!(await LocalNotifications.checkPermissions())) {
        return;
      }

      await LocalNotifications.schedule({
        notifications: [
          {
            title: title,
            body: body,
            id: i,
            schedule: {
              on: {
                // swap this out for at or every as needed
                hour,
                minute,
              },
            },
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }

    return {
      schedule,
    };
  };
}
