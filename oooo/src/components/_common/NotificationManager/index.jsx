import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeError,
  removeNotification,
} from "../../../logic/global/globalSlice";

function NotificationManager() {
  const [notifications, setNotifications] = useState([]);
  const errors = useSelector((state) => state?.global?.errors);
  const successes = useSelector((state) => state?.global?.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    const allMessages = [
      ...errors.map((error) => ({ ...error, type: "error" })),
      ...successes.map((notification) => ({
        ...notification,
        type: "success",
      })),
    ];

    const sortedMessages = allMessages.sort(
      (a, b) => a.timestamp - b.timestamp
    );
    setNotifications(sortedMessages);
  }, [errors, successes]);

  useEffect(() => {
    const timers = notifications.map((notification) => {
      return setTimeout(() => {
        handleClose(notification)
      }, 2000)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [notifications])

  const handleClose = (key) => {
    setNotifications((prev) =>
      prev.filter((notif) => notif.timestamp !== key.timestamp)
    );

    if (key.type === "error") {
      dispatch(removeError(key.timestamp));
    } else if (key.type === "success") {
      dispatch(removeNotification(key.timestamp));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.timestamp}
          className={`alert shadow-lg max-w-sm ${
            notification.type === "error" ? "alert-error" : "alert-success"
          } animate-fade-in`}
        >
          <div className="flex items-center justify-between">
            <span>{notification.message}</span>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => handleClose(notification)}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(NotificationManager);
