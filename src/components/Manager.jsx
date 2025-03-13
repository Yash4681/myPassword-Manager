import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DataTable from "./DataTable";
import Logo from "./Logo";
import { toast } from "react-toastify";
import axios from "axios";

const Manager = () => {
  const [formArray, setFormArray] = useState([]);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const ref = useRef();
  const passRef = useRef();

  const getPasswordsFromDB = async () => {
    const res = await axios.get("http://localhost:3000");
    const data = await res.data;
    setFormArray(data);
  };

  useEffect(() => {
    getPasswordsFromDB();
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

  const handleSave = async () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      toast("Password saved!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const formData = form;
      setForm({ site: "", username: "", password: "" });
      setFormArray([...formArray, { ...formData, id: uuidv4() }]);
      await axios.post(
        "http://localhost:3000",
        { ...formData, id: uuidv4() },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      toast("Error: Password not saved!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleDelete = async (id) => {
    let conf = confirm("Do you want to delete this password?");
    if (conf) {
      toast("Password deleted!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFormArray(formArray.filter((item) => item.id !== id));
      await axios.delete("http://localhost:3000", {
        headers: { "Content-Type": "application/json" },
        data: { id },
      });
    }
  };

  const handleEdit = async (id) => {
    setForm(formArray.filter((item) => item.id === id)[0]);
    setFormArray(formArray.filter((item) => item.id !== id));
    await axios.delete("http://localhost:3000", {
      headers: { "Content-Type": "application/json" },
      data: { id },
    });
  };

  return (
    <div className="min-h-[83.5vh] rounded-2xl mx-auto md:w-3/5 p-3 m-3 md:my-2">
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
        <div className="flex flex-col md:flex-row md:gap-5">
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
              className="absolute size-4 top-3 right-2 hover:cursor-pointer"
              src="./images/eye.png"
            />
          </div>
        </div>
      </div>
      <div className="flex my-2 justify-center">
        <button
          onClick={handleSave}
          className="rounded-full hover:cursor-pointer px-4 py-1 font-bold bg-violet-300"
        >
          <lord-icon
            src="https://cdn.lordicon.com/yrtftktn.json"
            trigger="hover"
            className="size-5 pt-1 mr-2"
          ></lord-icon>
          Save
        </button>
      </div>
      <DataTable
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        formArray={formArray}
      />
    </div>
  );
};

export default Manager;
