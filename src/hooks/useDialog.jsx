import React, { useCallback, useState } from "react";
import Modal from "../elements/Portal/Modal";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  //useCallBack helps un necessary re-rendering of child components if this function passed as prop
  const openDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Dialog = useCallback(
    ({ children }) => {
      return isOpen && <Modal>{children}</Modal>;
    },
    [isOpen]
  );

  return { openDialog, closeDialog, Dialog };
};

export default useDialog;
