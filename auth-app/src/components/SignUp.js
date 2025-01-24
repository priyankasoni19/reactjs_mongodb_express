import React, { use, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/api/auth/signup", form);

            navigate("/");

        } catch (err) {

            console.error(err);

        }

    };

    return (

        <>
            <div className="profile-image"></div>

            <form onSubmit={handleSubmit}>


                <input

                    type="text"

                    placeholder="Username"

                    value={form.username}

                    onChange={(e) => setForm({ ...form, username: e.target.value })}

                />

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

                <button type="submit">Sign Up</button>

            </form>
        </>

    );

};

export default SignUp;