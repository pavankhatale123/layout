import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginImage from "../../images/image-removebg-preview.png";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address format"
      )
      .required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one number"
      )
      .required("Required"),
  });

  const onSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log("Form data submitted:", values);
    setSubmitting(false);
    alert("Form data submitted");
    resetForm();
  };

  return (
    <div className="flex justify-center items-center md:h-screen h-auto bg-gray-300">
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-8 bg-teal-500 p-8 rounded w-4/5"
        style={{ boxShadow: "0px 9px 30px rgb(211, 211, 211) " }}
      >
        <div className="flex flex-col justify-center items-center md:flex-row gap-x-9 p-4  ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="bg-white max-md:px-2 p-8 rounded shadow-md  flex flex-col items-center w-full md:w-1/2 order-2 md:order-1">
              <div className="lg:mb-4 mb-2 w-full">
                <h1 className="text-2xl font-bold text-center mb-3">Login</h1>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 mb-2 md:mb-0">
                    Doesn't have an account yet?
                  </p>
                </div>
              </div>
              <div className="lg:mb-4 mb-2 w-full">
                <p>Email Address</p>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email Address"
                  className="border p-2 w-full border-red-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-[red]"
                />
              </div>
              <div className="lg:mb-4 mb-2 w-full">
                <div className="flex flex-row justify-between">
                  <p>Password</p>
                  <a href="#" className="text-[blue] hover:underline">
                    Forgot Password
                  </a>
                </div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter 6 characters or more"
                  className="border p-2 w-full border-red-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-[red]"
                />
              </div>
              <div className="lg:mb-4 mb-2 flex items-center w-full">
                <Field type="checkbox" name="rememberMe" id="rememberMe" />
                <p className="ml-2">Remember me</p>
              </div>

              <div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "teal",
                    height: "40px",
                    width: "100px",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  Login
                </button>
              </div>

              <div className="lg:mb-4 mb-2">
                <p className="text-gray-400">or login with</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-[red] px-4 py-2 rounded text-white">
                  Google
                </button>
                <button className="bg-[blue] text-white px-4 py-2 rounded">
                  Facebook
                </button>
              </div>
            </Form>
          </Formik>
          <div className="w-full md:w-2/3 order-1 md:order-2  mb-4 flex items-center justify-center">
            <img
              src={loginImage}
              alt="loginImage"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
