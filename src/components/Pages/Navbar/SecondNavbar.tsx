const SecondNavbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <select
                  className="select select-sm w-full mt-1"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value) window.location.href = `/medicines/${value}`;
                  }}
                >
                  <option disabled selected>
                    Medicines
                  </option>
                  <option className="font-bold" value="napa">
                    Napa
                  </option>
                  <option className="font-bold" value="seclo">
                    Seclo
                  </option>
                </select>
              </li>
              <li>
                <select
                  className="select select-sm w-full mt-1"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value) window.location.href = `/products/${value}`;
                  }}
                >
                  <option disabled selected>
                    Products
                  </option>
                  <option className="font-bold" value="alatrol">
                    Alatrol
                  </option>
                  <option className="font-bold" value="monas">
                    Monas
                  </option>
                </select>
              </li>
              <li>
                <select
                  className="select select-sm w-full mt-1"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value) window.location.href = `/equipments/${value}`;
                  }}
                >
                  <option disabled selected>
                    Equipments
                  </option>
                  <option className="font-bold" value="stethoscope">
                    Stethoscope
                  </option>
                  <option className="font-bold" value="thermometer">
                    Thermometer
                  </option>
                </select>
              </li>
              <li>
                <a href="/online-doctor">Online Doctor</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">MediPoint</a> */}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <select
                className="select select-sm"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) window.location.href = `/medicines/${value}`;
                }}
              >
                <option disabled selected>
                  Medicines
                </option>
                <option className="font-bold" value="napa">
                  Napa
                </option>
                <option className="font-bold" value="seclo">
                  Seclo
                </option>
              </select>
            </li>

            <li>
              <select
                className="select select-sm"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) window.location.href = `/products/${value}`;
                }}
              >
                <option disabled selected>
                  Products
                </option>
                <option className="font-bold" value="alatrol">
                  Alatrol
                </option>
                <option className="font-bold" value="monas">
                  Monas
                </option>
              </select>
            </li>

            <li>
              <select
                className="select select-sm"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) window.location.href = `/equipments/${value}`;
                }}
              >
                <option disabled selected>
                  Equipments
                </option>
                <option className="font-bold" value="stethoscope">
                  Stethoscope
                </option>
                <option className="font-bold" value="thermometer">
                  Thermometer
                </option>
              </select>
            </li>

            <li>
              <a href="/online-doctor">Online Doctor</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default SecondNavbar;
