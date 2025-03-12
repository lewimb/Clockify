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
              value={formik.values.email}
            />
            <PasswordInput
              name="password"
              placeholder="Input Your Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Your Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
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
