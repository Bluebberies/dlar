import { BookmarkContent } from "@/component/content/page/BookmarkContent.tsx";
import { BasePageLayout } from "../layout/BasePageLayouts/BasePageLayout";

export const BookmarkView = () => {
  return (
    // <SecondPageLayout>
    //     <BookmarkContent />
    // </SecondPageLayout>
    <BasePageLayout
      // hideHamburger={true}
      // filterPage={true}
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
      <BookmarkContent />
    </BasePageLayout>
  );
};
