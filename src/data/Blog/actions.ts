import { TypedAction } from "../common";

const enum ActionTypes {
  SET_NOTIFICATION = "[Blog] Set notification",
}

type Action = SetNotificationAction;

interface SetNotificationAction
  extends TypedAction<ActionTypes.SET_NOTIFICATION> {
  payload: { notification: string };
}

const setNotification = (notification: string): Action => ({
  type: ActionTypes.SET_NOTIFICATION,
  payload: { notification },
});

export { ActionTypes, Action };
export { setNotification };
