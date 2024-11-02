import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, LogOut } from "lucide-react";
import { NavItems } from "./constants/constants";
import NavRouts from "./Routes/NavRouts";
import Userimg from "./Assets/pngegg.png";

function App() {
  const [loading1, setLoading1] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      setData(JSON.parse(userData));
      setLoading(false);
    }
  }, []);

  let [open, change] = useState(false);
  let end = () => {
    change(false);
  };

  let toggle = () => {
    change(!open);
  };

  const handleSignIn = async () => {
    setLoading1(true);
    try {
      const res = await fetch("http://localhost:3008/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: document.getElementById("email").value,
          Password: document.getElementById("password").value,
        }),
      });
      const data1 = await res.json();
      setLoading1(false);

      if (data1.msg === "error") {
        setError(true);
      } else {
        localStorage.setItem("authToken", data1.token);
        localStorage.setItem("userData", JSON.stringify(data1.data));
        setLoading(false);
        setData(data1.data);
      }
    } catch (err) {
      setLoading1(false);
      setError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setLoading(true);
  };

  return (
    <div className="w-full h-screen select-none overflow-hidden no-scrollbar ">
      {loading ? (
        <div className="w-full  h-screen ">
          <div className="p-3 flex flex-col justify-center h-[80%] max-w-xl   mx-auto">
            <h1 className="text-4xl text-center text-red-700  font-bold my-7">
              Signin
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col gap-4"
            >
              <input
                id="email"
                className="bg-slate-300 p-3 rounded-lg"
                placeholder="Email"
                type="email"
              />
              <input
                id="password"
                className="bg-slate-300 p-3 rounded-lg"
                placeholder="Password"
                type="password"
              />

              <button
                onClick={handleSignIn}
                className="bg-red-700 disabled:bg-slate-200 text-white  self-center p-3 w-40 rounded-lg uppercase hover:opacity-95 disabled:opacity-90"
              >
                {loading1 ? "loading.." : "sign in"}
              </button>
            </form>
            <div className="flex mt-3"></div>
            {error && <h1 className="text-red-500">invalid credentials</h1>}
          </div>
        </div>
      ) : (
        <div className="bg-gray-600 h-screen md:m-1">
          <div className="w-full h-[6.7rem] flex flex-col ">
            <div className="bg-gray-200 flex w-full items-center justify-center border-t-2 border-b-[1px] border-red-700  h-[50%] md:justify-between">
              <img
                className="w-36 ml-6 h-10"
                src="https://www.kluniversity.in/img/logo9.png"
                alt="kl logo"
              />
              <h1 className=" text-2xl font-bold hidden md:flex  tracking-wide text-red-800">
                Student Portal<i className=" text-blue-500 font-sans">-ERP</i>{" "}
              </h1>
              <div className="md:flex hidden md:space-x-3 mr-10 ">
                <img className="size-9" src={Userimg} alt="icon" />
                <h1 className="font-bold ">{data.Username}</h1>
              </div>
            </div>
            <div className="bg-red-700  border-b-[1px] border-red-700 flex w-full justify-between items-center h-[50%]">
              <div className="w-32 h-full text-center flex items-center justify-center text-white font-bold bg-blue-500">
                <a href="/">KLU ERP</a>
              </div>

              <div className="mr-16 ">
                <a
                  onClick={handleLogout}
                  className="text-white hover:cursor-pointer font-bold hidden md:flex "
                >
                  {" "}
                  <LogOut />
                  Logout
                </a>
              </div>
              <button
                onClick={toggle}
                className="md:hidden flex   mx-3 px-3 py-6"
              >
                {open ? <X size={"2.5em"} /> : <Menu size={"2.5em"} />}
              </button>
            </div>
          </div>
          <div className=" vishnu w-full h-auto grid grid-cols-9 bg-white ">
            <div className="bg-white div h-[90%] no-scrollbar col-span-2 md:flex hidden overflow-hidden">
              <div className="  InnerSidebar   ">
                <ul className="flex flex-col h-[88%]  justify-center  m-[1.8px]  ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " Active  nav pt-2  border-b-[1px] border-white "
                          : "SidebarNavlink nav  border-b-[1px] border-t-[1px] border-white"
                      } `
                    }
                  >
                    <div className="ml-4">
                      <Home />
                    </div>
                    <div className="  ml-3 ">
                      <p className="">Home</p>
                    </div>
                  </NavLink>
                  {NavItems.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.to}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? " Active  nav  border-b-[1px] border-white "
                            : "SidebarNavlink nav border-b-[1px] border-white"
                        }`
                      }
                    >
                      <div className="ml-4">{item.icon}</div>
                      <div className="  ml-3 ">
                        <p className="">{item.lable}</p>
                      </div>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white-400 h-full  col-span-9 overflow-hidden  md:col-span-7">
              {open && (
                <div className="z-40 fixed w-full h-screen bg-black md:hidden flex-col  text-2xl">
                  <ul className="">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? " Active nav border-b-[1px] border-white  "
                            : "SidebarNavlink  nav border-b-[1px] border-white "
                        } `
                      }
                      onClick={end}
                    >
                      <div className="ml-8">
                        <Home />
                      </div>
                      <div className="  ml-3 ">
                        <p className="">Home</p>
                      </div>
                    </NavLink>
                    {NavItems.map((items, index) => (
                      <NavLink
                        key={index}
                        to={items.to}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? " Active nav border-b-[1px] border-white "
                              : "SidebarNavlink  nav border-b-[1px] border-white "
                          } `
                        }
                        onClick={end}
                      >
                        <div className="ml-8">{items.icon}</div>
                        <div className="  ml-5 ">
                          <p className="">{items.lable}</p>
                        </div>
                      </NavLink>
                    ))}
                  </ul>
                </div>
              )}

              <NavRouts />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
