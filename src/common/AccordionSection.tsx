import React, { useState } from "react";
import * as Joy from "@mui/joy";

export function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <Joy.Accordion defaultExpanded>
      <Joy.AccordionSummary>
        <Joy.Typography level="title-sm">{title}</Joy.Typography>
      </Joy.AccordionSummary>
      <Joy.AccordionDetails>
        <Joy.Box sx={{ my: 2 }}>{children}</Joy.Box>
      </Joy.AccordionDetails>
    </Joy.Accordion>
  );
}
