import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/dashboard/profile"}>Profile</Link>
                </li>
                <li>
                  <Link to={"/"}>Edit Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashboardLayout;