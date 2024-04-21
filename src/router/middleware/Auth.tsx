import { Navigate } from "react-router-dom";

export default function Auth({
  element,
}: {
  element: React.ReactNode | JSX.Element;
}) {
  const auth = localStorage.getItem("isLogin") === "true";
  return auth ? element : <Navigate to="/login" />;
}
