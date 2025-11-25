import { useState, useEffect } from "react";

import UserData from "../userdata/userdata";
import Links from "../links/links";
import Share from "../share/share";

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

  const mockLinksData = [
    {
      title: "Telegram",
      url: "https://t.me/aziziy_dev"
    },
    {
      title: "GitHub",
      url: "https://github.com/gulomovazizbek"
    },
    {
      title: "Website",
      url: "https://ilmalogiya.uz"
    },
    {
      title: "Telegram",
      url: "https://t.me/aziziy_dev"
    },
    {
      title: "GitHub",
      url: "https://github.com/gulomovazizbek"
    },
    {
      title: "Website",
      url: "https://ilmalogiya.uz"
    }
  ];

  console.log(mockLinksData)

  return (
    <div className="app">
      <main>
        <UserData userdata={user ?? mockUserData} />
        <Links links={mockLinksData} />
      </main>
      <Share />
    </div>
  );
}

export default App;