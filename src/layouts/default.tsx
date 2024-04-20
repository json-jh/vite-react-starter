import { Link, Outlet } from "react-router-dom";

export default function defaultLayout() {
  return (
    <>
      <div>defaultLayout</div>
      <div className="flex gap-2">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
