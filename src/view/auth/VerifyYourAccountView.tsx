import { AuthLayout } from "../layout/AuthLayout.tsx";
import {VerifyYourAccountFormik} from "../../component/formik/auth/VerifyYourAccountFormik.tsx";
import { ThemeUtil } from "@/util/ThemeUtil.ts";

export const VerifyYourAccountView = () => {
  document.title = "Verify Your Account | Dwelar";

  return (
    <AuthLayout
      style={{
        // marginTop: "5rem",
        // // paddingLeft: 10,
        // padding: '0 15px',
        // width: "50%"
        marginTop: "50px",
        padding: "10px 0",
      }}
      title={"Verify your Email Address!"}
      subTitle={
        "You have successfully registered to Dwelar. \n" +
        "Please input the code sent to your mail to verify your email address."
      }
      bgImage={ThemeUtil.image.bedroom}
    >
      <VerifyYourAccountFormik />
    </AuthLayout>
  );
};
