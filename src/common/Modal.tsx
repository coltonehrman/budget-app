import React, { useState } from "react";
import * as Joy from "@mui/joy";
import { AccordionSection } from "./AccordionSection";

export type SlotType = "body" | "button";

export const Slot = ({
  type,
  title,
  children,
}: {
  type: SlotType;
  title?: string;
  children: JSX.Element | JSX.Element[];
}) => <>{children}</>;

export function Modal({
  title,
  open,
  close,
  minWidth,
  children,
}: {
  title: string;
  open: boolean;
  close: () => void;
  minWidth?: number;
  children: JSX.Element[] | JSX.Element;
}): JSX.Element {
  let body: React.ReactElement = <></>;
  let button: React.ReactElement = <></>;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const type = (child.props as any).type as SlotType;

    switch (type) {
      case "body":
        body = child;
        break;
      case "button":
        button = child;
        break;
    }
  });

  return (
    <Joy.Modal open={open} onClose={close}>
      <Joy.ModalDialog minWidth={minWidth ?? 550} sx={{ overflow: "scroll" }}>
        <Joy.ModalClose />
        <Joy.Typography level="h4">{title}</Joy.Typography>

        {body}

        <Joy.Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {button}
        </Joy.Sheet>
      </Joy.ModalDialog>
    </Joy.Modal>
  );
}
