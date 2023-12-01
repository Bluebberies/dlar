import { BasePageLayout } from "@/view/layout/BasePageLayouts/BasePageLayout.tsx";
import { SearchResultContent } from "@/component/content/page/SearchResultContent.tsx";

export const SearchResultView = () => {
  return (
    <BasePageLayout
      // isBgLight={true}
      // filterPage={true}
      // hideHamburger={true}
      // showBackButton={true}
      // hideLogo={true}
      // showHeaderBg={true}
      // headerNavStyles={{
      //   position: "sticky",
      //   // backgroundColor: "inherit",
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
      // backButtonText={"Back to Properties"}
      backButtonStyles={{
        width: "90%",
        // paddingTop: "3rem",
        margin: "auto",
        paddingLeft: "0",
      }}

    >
      <SearchResultContent />
    </BasePageLayout>
  );
};
