import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>
        {t("notificationsMessage", {
          count: 2,
        })}
      </h1>

      <Trans i18nKey="wellcomeMess">
        Welcome, <b>user</b>! <i>surname</i>
      </Trans>
    </div>
  );
}

export default App;
