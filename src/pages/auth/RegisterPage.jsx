import logo from "../../assets/Logo.svg";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validateSchema: Yup.object({
      email: Yup.string()
        .email("Email invalid")
        .required("Please input your email"),
      password: Yup.string().required("Password required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Not the same as the password")
        .required("Please confirm your password"),
    }),
  });

  return (
    <div>
      <div className="flex flex-col m-5 items-center justify-center">
        <img src={logo} className="pb-20" alt="Logo Clockyfiy" />
        <form onSubmit={formik.handleSubmit} className="py-6">
          <div className="w-[400px] flex flex-col gap-3 items-center ">
            <EmailInput
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
            <PasswordInput
              name="password"
              placeholder="Input Your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-600">{formik.errors.password}</span>
            )}
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Your Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <span className="text-red-600">
                  {formik.errors.confirmPassword}
                </span>
              )}
            <Button type={"submit"} className="my-5 w-[328px]">
              CREATE YOUR ACCOUNT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
