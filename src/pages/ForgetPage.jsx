import React from "react";
import logo from "../assets/Logo.svg";
import EmailInput from "../components/EmailInput";
import Button from "../components/Button";
import { useForgetPassword } from "../lib/tsQuery/queries";
import { useFormik } from "formik";
import * as Yup from "yup";

function ForgetPage() {
  const { mutate: forgetPassword } = useForgetPassword();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      forgetPassword(values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalid")
        .required("Please input your email"),
    }),
  });
  return (
    <div>
      <div className="flex flex-col m-5 items-center justify-center">
        <img src={logo} className="pb-20" alt="Logo Clockyfiy" />
        <form onSubmit={formik.handleSubmit} className="py-6">
          <div className="w-[400px] flex flex-col gap-2 items-center ">
            <EmailInput
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-400 w-[80%] text-start text-sm mt-[-10px]">
                *{formik.errors.email}
              </span>
            )}
            <Button type={"submit"} className="my-5 w-[328px]">
              CONFIRM EMAIL
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPage;
