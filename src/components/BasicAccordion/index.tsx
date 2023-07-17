import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoIosArrowDown } from 'react-icons/io';

interface AccordionProps {
  title: string;
  answer: string;
};

const BasicAccordion: React.FC<AccordionProps> = ({ title, answer}) => {

  return (
    <>
      <Accordion sx={{background: '#D9D9D9', boxShadow: 'none', color: '#0E1433'}}>
        <AccordionSummary
          expandIcon={ <IoIosArrowDown color='#0E1433'/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BasicAccordion;