import React, { useRef, useState, useEffect } from "react";
import DataTable from "./DataTable";
import Logo from "./Logo";

const Manager = () => {
  const [formArray, setFormArray] = useState([]);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const ref = useRef();
  const passRef = useRef();

  useEffect(() => {
    var localData = localStorage.getItem("formArray");
    if (localData) {
      setFormArray(JSON.parse(localData));
    }
  }, []);

  const handleShowPassword = () => {
    if (ref.current.src.includes("images/eye.png")) {
      ref.current.src = "images/crosseye.png";
      passRef.current.type = "text";
    } else {
      ref.current.src = "images/eye.png";
      passRef.current.type = "password";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setFormArray([...formArray, form]);
    localStorage.setItem("formArray", JSON.stringify([...formArray, form]));
    setForm({ site: "", username: "", password: "" });
  };
  return (
    <div className="container rounded-2xl mx-auto w-3/5 p-3 my-2">
      <Logo size="2xl" />
      <p className="text-center text-violet-900">
        Manage all your passwords at one place
      </p>
      <div>
        <input
          className="bg-white border border-violet-400 px-3 my-2 rounded-full w-full"
          type="text"
          placeholder="Enter your website url"
          name="site"
          value={form.site}
          onChange={handleChange}
        />
        <div className="flex gap-5">
          <input
            className="bg-white px-3 border border-violet-400 my-2 rounded-full w-full"
            type="text"
            placeholder="Enter Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <div className="relative">
            <input
              className="bg-white px-3 border border-violet-400 my-2 rounded-full w-full"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              ref={passRef}
            />
            <img
              ref={ref}
              onClick={handleShowPassword}
              className="absolute size-4 top-3 right-2"
              src="./images/eye.png"
            />
          </div>
        </div>
      </div>
      <div className="container flex my-2 justify-center">
        <button
          onClick={handleSave}
          className="rounded-full px-4 py-1 font-bold bg-violet-300"
        >
          <lord-icon
            src="https://cdn.lordicon.com/yrtftktn.json"
            trigger="hover"
            className="size-5 pt-1 mr-2"
          ></lord-icon>
          Submit
        </button>
      </div>
      <DataTable formArray={formArray} />
    </div>
  );
};

export default Manager;
