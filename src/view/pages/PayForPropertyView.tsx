import { PropertyDetailsContent } from "@/component/content/page/PropertyDetailsContent.tsx";
import { BasePageLayout } from "../layout/BasePageLayouts/BasePageLayout";
import { useMediaQuery } from "react-responsive";
import { PayForPropertyContent } from "@/component/content/page/PayForPropertyContent";

export const PayForPropertyView = () => {
  const bp1 = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    // <SecondPageLayout>
    //   <PropertyDetailsContent />
    // </SecondPageLayout>
    <BasePageLayout
      filterPage={true}
      headerNavStyles={{
        backgroundColor: "#fff",
        position: "sticky",
      }}
      isBgLight={true}
      persistDarkLogo={true}
      showNavbarFixed={false}
      showHeaderBg={false}
      showBackButton={true}
      backButtonText={"Back to Properties"}
      backButtonStyles={{
        paddingTop: "3rem",
        width: bp1 ? "90%" : "90%",
        margin: "auto",
        paddingLeft: "0",
      }}
    >
      <PayForPropertyContent />
    </BasePageLayout>
  );
};
