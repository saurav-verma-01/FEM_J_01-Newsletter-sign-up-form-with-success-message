import CardContent from "./CardContent";
import CardImg from "./CardImg";

const DisplayCard = ({ isValid, setIsValid, email, setEmail }) => {
  return (
    <section className="display-card">
      <CardContent
        isValid={isValid}
        setIsValid={setIsValid}
        email={email}
        setEmail={setEmail}
      />
      <CardImg />
    </section>
  );
};

export default DisplayCard;
