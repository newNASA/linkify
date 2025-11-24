import { useState, useEffect } from "react"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const userData = tg.initDataUnsafe?.user;
    document.writeln("userdata:", userData)

    Promise.resolve().then(() => {
      setUser(userData);
    });
  }, []);

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>Telegram Web App</h1>
        {user ? (
          <div>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Ism:</strong> {user.first_name}</p>
            <p><strong>Familiya:</strong> {user.last_name}</p>
            <p><strong>Username:</strong> @{user.username}</p>
            <img src={user.photo_url} width={80} style={{ borderRadius: "50%" }} />
          </div>
        ) : (
          <p>Foydalanuvchi maʼlumotlari yuklanmoqda...</p>  
        )}
      </div>
    </>
  )
}

export default App