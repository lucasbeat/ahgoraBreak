import "./breaks.css";

function Breaks({ breaks }) {
  return (
    <div className="breaks_container">
      {breaks.map((breakItem, id) => {
        return (
          <div key={id} className="breaks_box">
            {breaks.id}
            <h1 className="agent">{breakItem.agent}</h1>
            <h3 className="reason">{breakItem.reason}</h3>
            <p className="date">{breakItem.date}</p>
            <p className="offline">
              Offline:{" "}
              {breakItem.offline ? breakItem.offline : "Não registrado"}
            </p>
            <p className="online">
              Online: {breakItem.online ? breakItem.online : "Não registrado!"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Breaks;
