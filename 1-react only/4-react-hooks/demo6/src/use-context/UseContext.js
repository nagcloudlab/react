import React, { useContext } from "react";

const AuthContext = React.createContext();
const LanguageContext = React.createContext();

const B = (props) => {
  const user = useContext(AuthContext);
  const lang = useContext(LanguageContext);
  const message = lang === "ar" ? "Marhaban" : "Hello";
  return (
    <div>
      <div>
        {message} - {user}
      </div>
    </div>
  );
};

const A = (props) => {
  return (
    <div>
      <AuthContext.Provider value={"Nag"}>
        <LanguageContext.Provider value={"en"}>
          <B />
        </LanguageContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

function UseContext(props) {
  return (
    <div>
      <A />
    </div>
  );
}

export default UseContext;
