import { useState, useEffect } from "react";
import UserData from "../userdata/userdata";

import profile from "../../assets/imgs/1215.png";
import "./app.scss";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const userData = tg.initDataUnsafe?.user;

    Promise.resolve().then(() => {
      setUser(userData);
    });
  }, []);

  const mockUserData = {
    img: profile,
    first_name: "Azizbek",
    last_name: "G'ulomov",
    username: "gulomovazizbek",
    description: "Founder of ilmalogiya.uz | Nephopile | Web and Bot developer from Fergana | Channels: @aziziy_dev, @speedjon, @ilmalogiya & @chessstream"
  };

  return (
    <div className="app">
      <UserData userdata={user ?? mockUserData} />
    </div>
  );
}

export default App;