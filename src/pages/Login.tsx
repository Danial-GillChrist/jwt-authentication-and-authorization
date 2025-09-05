import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, NavLink } from "react-router";

// ✅ Validation Schema with Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: any }) => {
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        values
      );

      localStorage.setItem("token", JSON.stringify(res.data.access_token));
      console.log("User Successfully Login", res);

      // 👉 Navigate to /profile after login
      navigate("/profile");
    } catch (err) {
      alert("Wrong user");
      console.log("Wrong User", err);
    }
  };

  return (
    <div className="login_header">
      {/* Header */}
      <header className="p-4 shadow">
        <div className="xl:max-w-[1200px] mx-auto">
          <div className="flex justify-between">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <nav>
              <ul className="flex justify-around gap-6">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <div className="loginContainer flex justify-center items-center h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Email */}
                <label className="label">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Password */}
                <label className="label mt-2">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-neutral mt-4 w-full"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
