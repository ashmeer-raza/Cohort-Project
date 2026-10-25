import AuthContextData from "./AuthContextData.jsx";

const AuthContext = ({ children }) => {
  return <AuthContextData.Provider>{children}</AuthContextData.Provider>;
};

export default AuthContext;
