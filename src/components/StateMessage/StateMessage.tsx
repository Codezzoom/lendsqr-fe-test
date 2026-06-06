import "./StateMessage.scss";

interface StateMessageProps {
  title: string;
  message: string;
  type?: "loading" | "error" | "empty";
}

const StateMessage = ({ title, message, type = "empty" }: StateMessageProps) => {
  return (
    <div className={`state-message ${type}`}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default StateMessage;