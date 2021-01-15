import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../../shared/components/Modal";

const DefaultModals = () => {
  const { t } = useTranslation("common");

  return (
    <Modal
      color="primary"
      title="Congratulations!"
      btn="Default"
      message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
    />
  );
};

export default DefaultModals;
