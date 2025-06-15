import profilePic from "./assets/react.svg"
function Card() {
  return (
    <div className="Card">
      <img className="card-img" src={profilePic} alt="Profile" />
      <h2 className="card-title">Atheeq</h2>
      <p className="para">Student/Coder</p>
    </div>
  );
}

export default Card;
