import Sheet, { SheetRef } from "react-modal-sheet";
import React from "react";

export type BottomSheetLayoutPropTypes = {
  isOpen: boolean;
  setOpen: Function;
  children?: React.ReactNode;
  myref?: any;
  snapPoints?: [number, number];
  handleBackdropTap?: any;
};

const BottomSheetLayout = ({
  isOpen = false,
  setOpen,
  children,
  myref,
  snapPoints = [700, 500],
  handleBackdropTap,
}: BottomSheetLayoutPropTypes) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      disableDrag={false}
      // rootId="root"
      snapPoints={snapPoints}
      initialSnap={1}
      style={{ zIndex: "10000000000" }}
    >
      <Sheet.Container
        style={{ zIndex: "10000000000", borderTopRightRadius: "30px" , borderTopLeftRadius: "30px" }}
      >
        <Sheet.Header />
        <Sheet.Content
          style={{ paddingBottom: myref?.current?.y, zIndex: "10000000000" }}
        >
          <Sheet.Scroller draggableAt="both">
            {children}
            {/* Some content here that makes the sheet content scrollable */}
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      {handleBackdropTap ? (
        <Sheet.Backdrop onTap={handleBackdropTap} />
      ) : (
        <Sheet.Backdrop onTap={() => setOpen(false)} />
      )}
    </Sheet>
  );
};

export default BottomSheetLayout;
