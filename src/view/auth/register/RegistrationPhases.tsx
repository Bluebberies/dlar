import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CompleteKycRegisterView } from "./CompleteKycRegisterView";
import { NoPageFoundView } from "../../pages/NoPageFoundView";
import { SecondPhaseRegisterView } from "./SecondPhaseRegisterView";
import { VerifyYourAccountView } from "../VerifyYourAccountView";
import { EmailVerificationSuccessfulView } from "../../pages/EmailVerificationSuccessfulView";

function RegistrationPhases() {
  // const navigate = useNavigate();
  const { phase, token } = useParams();

  //   useEffect(() => {

  //   }, [])

  console.log("phase", phase, token);
  if (phase) {
    if (+phase == 1) {
      return <VerifyYourAccountView />;
    } else if (+phase == 2) {
      return <SecondPhaseRegisterView />;
    } else if (+phase == 3) {
      return <CompleteKycRegisterView />;
    }
    // else if (phase == 'emailVerified') {
    //   return <EmailVerificationSuccessfulView />;
    // }
    else {
      return <NoPageFoundView />;
    }
  } else {
    return <NoPageFoundView />;
  }
}

export default RegistrationPhases;
