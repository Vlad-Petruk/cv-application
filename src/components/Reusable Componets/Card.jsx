import "./ReusableContent.css";
import Icon from "@mdi/react";
import Header from "../Reusable Componets/Header";

function Card({ boxHeader, icon, handleClick, chevronIcon }) {
  return (
    <div className="card" onClick={handleClick}>
      <Icon path={icon} size={1} />
      <Header className={"h2"} text={boxHeader} />
      <Icon path={chevronIcon} size={1} />
    </div>
  );
}

export default Card;
