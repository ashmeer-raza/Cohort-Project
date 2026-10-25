import AuthContextData from "./AuthContextData.jsx";

const AuthContext = ({ children }) => {
    
  return <AuthContextData.Provider value={}>{children}</AuthContextData.Provider>;
};

export default AuthContext;
