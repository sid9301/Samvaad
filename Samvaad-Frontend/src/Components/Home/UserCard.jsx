import "./UserCard.css";
import Aiprofile from "../../assets/Aiprofile.png";
const UserCard = () => {
  return (
    <div className="user-card">
      <img src={Aiprofile} alt="user"  className="user-profile"/>
      <div className="user-info">
        <p className="user-name">Siddhant</p>
        <p className="user-message">This is the last message...</p>
        <p className="user-status"> 5 min ago</p>
      </div>
    </div>
  );
}

export default UserCard;