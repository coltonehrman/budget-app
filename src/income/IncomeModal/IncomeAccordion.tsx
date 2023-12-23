import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";

export default function IncomeAccordion({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary>
        <Typography level="title-sm">{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Box sx={{ my: 2 }}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
}
