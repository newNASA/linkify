import "./userdata.scss"
// import profile from "../../assets/imgs/1215.png"

const UserData = ({ userdata }) => {
    return (
        <div className="userdata">
            <img src={userdata.img ?? userdata.photo_url} alt="" className="profile"/>
            <h2>{userdata.first_name} {userdata.last_name}</h2>
            <p className="username">@{userdata.username}</p>
            <p className="description">{userdata.description ?? userdata.bio}</p>
        </div>
    );
};

export default UserData;