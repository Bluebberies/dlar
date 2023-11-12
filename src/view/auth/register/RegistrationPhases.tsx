import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CompleteKycRegisterView } from "./CompleteKycRegisterView";
import { NoPageFoundView } from "../../pages/NoPageFoundView";
import { SecondPhaseRegisterView } from "./SecondPhaseRegisterView";
import { VerifyYourAccountView } from "../VerifyYourAccountView";
import { EmailVerificationSuccessfulView } from "../../pages/EmailVerificationSuccessfulView";
import { FirstPhaseRegisterView } from "./FirstPhaseRegisterView";

function RegistrationPhases() {
  // const navigate = useNavigate();
  const { phase } = useParams();

  //   useEffect(() => {

  //   }, [])

  console.log("phase", phase);
  if (phase) {
    let phaseType = phase.toLocaleLowerCase()
    if (phaseType == "user") {
      return <FirstPhaseRegisterView />;
    } else if (phaseType == 'info') {
      return <SecondPhaseRegisterView />;
    }
    //  else if (+phase == 3) {
    //   return <CompleteKycRegisterView />;
    // }
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
