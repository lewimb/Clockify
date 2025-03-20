import React from "react";
import logo from "../assets/Logo.svg";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router";
import { useResetPassword } from "../lib/tsQuery/queries";
import { useFormik } from "formik";
import * as Yup from "yup";

function ResetPage() {
  const { mutate: resetPassword } = useResetPassword();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resetToken = queryParams.get("resetToken");
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      const data = {
        newPassword: values.password,
        confirmPassword: values.confirmPassword,
        resetToken,
      };
      resetPassword(data, {
        onSuccess: navigate("/login"),
      });
    },
    validationSchema: Yup.object({
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
          <div className="w-[400px] flex flex-col gap-2 items-center ">
            <PasswordInput
              name="password"
              placeholder="Input Your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-400 w-[80%] text-start text-sm mt-[-10px]">
                *{formik.errors.password}
              </span>
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
                <span className="text-red-400 w-[80%] text-start text-sm mt-[-10px]">
                  *{formik.errors.confirmPassword}
                </span>
              )}
            <Button type={"submit"} className="my-5 w-[328px]">
              CHANGE PASSWORD
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPage;
