import { SecondPageLayout } from "@/view/layout/SecondPageLayout.tsx";
import { PropertyDetailsContent } from "@/component/content/page/PropertyDetailsContent.tsx";
import { BasePageLayout } from "../layout/BasePageLayouts/BasePageLayout";
import { useMediaQuery } from "react-responsive";

export const PropertyDetailsView = () => {
  const bp1 = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <BasePageLayout
      // isBgLight={true}
      // showHeaderBg={true}
      // showBackButton={true}
      // backButtonText={"Back to Properties"}
      // backButtonStyles={{
      //   paddingTop: "3rem",
      //   width: bp1 ? "90%" : "70%",
      //   margin: "auto",
      //   paddingLeft: "0",
      // }}
      // headerNavStyles={{
      //   position: "sticky",
      // }}

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
        width: bp1 ? "90%" : "70%",
        margin: "auto",
        paddingLeft: "0",
      }}

    >
      <PropertyDetailsContent />
    </BasePageLayout>
  );
};
