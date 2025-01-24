import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const [form, setForm] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:5000/api/auth/signin", form);

            localStorage.setItem("token", response.data.token);

            navigate("/home");

        } catch (err) {

            console.error(err);

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <input

                type="email"

                placeholder="Email"

                value={form.email}

                onChange={(e) => setForm({ ...form, email: e.target.value })}

            />

            <input

                type="password"

                placeholder="Password"

                value={form.password}

                onChange={(e) => setForm({ ...form, password: e.target.value })}

            />

            <button type="submit">Sign In</button>

        </form>

    );

};

export default SignIn;