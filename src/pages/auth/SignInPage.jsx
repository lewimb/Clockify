import logo from "../../assets/Logo.svg";
import Button from "../../components/Button";
import { Link } from "react-router";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignInPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email required"),
      password: Yup.string().required("Password required"),
    }),
  });

  return (
    <>
      <div className="flex flex-col m-5 items-center justify-center">
        <img src={logo} className="pb-20" alt="Logo Clockyfiy" />
        <form onSubmit={formik.handleSubmit} className="py-6">
          <div className="w-[400px] flex flex-col gap-3 items-center ">
            <EmailInput
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
            <PasswordInput
              name={"password"}
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder={"Input Your Password"}
            >
              <a href="#" className="inline">
                <u className="text-[#A7A6C5] text-sm block pt-1 text-end">
                  Forgot Password
                </u>
              </a>
            </PasswordInput>
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-600">{formik.errors.password}</span>
            )}
            <Button type="submit" className="my-5 w-[328px]">
              Sign in
            </Button>
            <Link to="/register">
              <u>Create new account?</u>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
