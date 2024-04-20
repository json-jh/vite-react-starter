import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div>LOGIN</div>
      <div className="flex gap-2">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
    </>
  );
}
