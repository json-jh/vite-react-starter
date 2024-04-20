import { Link, Outlet } from "react-router-dom";

export default function defaultLayout() {
  console.log("default layout");
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
