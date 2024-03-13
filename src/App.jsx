import { useState } from "react";

import DisplayCard from "./components/DisplayCard";
import SuccessCard from "./components/SuccessCard";

const App = () => {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <main>
      {isValid ? (
        <SuccessCard
          email={email}
          setEmail={setEmail}
          setIsValid={setIsValid}
        />
      ) : (
        <DisplayCard
          isValid={isValid}
          setIsValid={setIsValid}
          email={email}
          setEmail={setEmail}
        />
      )}
    </main>
  );
};

export default App;
