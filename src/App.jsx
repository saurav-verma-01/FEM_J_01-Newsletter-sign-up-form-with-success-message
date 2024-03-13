import { useState } from "react";
import Card from "./components/Card";
import CardContent from "./components/CardContent";
import CardImg from "./components/CardImg";
import ValidContent from "./components/ValidContent";

const App = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <main>
      {!isValid && (
        <Card className="form-card">
          <CardContent isValid={isValid} setIsValid={setIsValid} />
          <CardImg />
        </Card>
      )}

      {isValid && (
        <Card className="success-card">
          <ValidContent />
        </Card>
      )}
    </main>
  );
};

export default App;
