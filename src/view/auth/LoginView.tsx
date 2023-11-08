import { AuthLayout } from "../layout/AuthLayout.tsx";
import { LoginContent } from "../../component/content/auth/LoginContent.tsx";
import { RouterConstantUtil } from "../../util/constant/RouterConstantUtil.ts";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const LoginView = () => {
  document.title = "Login | Dwelar";

  const routeUrl = RouterConstantUtil.routes.auth.baseRegisterRoute;
  return (
    <AuthLayout
      style={{
        marginTop: "50px",
        padding: "10px 0",
      }}
      footerNextRouteType="register"
      routeUrl={routeUrl}
    >
      <LoginContent routeUrl={routeUrl} />
    </AuthLayout>
  );
  
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setIsOpen(!isOpen);
  // };
  // return (
  //   <div>
  //     <button onClick={toggleDrawer} className="mt-[40rem]">
  //       Toggle Drawer
  //     </button>

  //     <AnimatePresence>
  //       {isOpen && (
  //         <motion.div
  //           initial={{ height: 0 }}
  //           animate={{ height: "50%", y: "0%" }}
  //           exit={{ height: 0, y: "" }}
  //           transition={{ type: "spring", damping: 10, duration: 0.1 }}

  //           style={{
  //             position: "fixed",
  //             top: 0,
  //             left: 0,
  //             width: "100%",
  //             background: "blue",
  //           }}
  //         >
  //           This is the drawer content.
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   </div>
  // );
};
