import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionMUI(props) {
  return (
    <Accordion style={{ width: "100%" }} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography style={{
          fontWeight: "bold",
          color:"#666"
        }}>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}