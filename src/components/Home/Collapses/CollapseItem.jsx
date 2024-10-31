import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const CustomExpandIcon = styled(ExpandMoreIcon)(({ expanded }) => ({
    width: '32px',
    height: '32px',
    transition: 'all 0.3s ease-in-out',
    transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
    cursor: 'pointer',
    borderRadius: '50%',
    border: expanded ? 'none' : '1px solid rgba(211, 211, 211, 1)',
    boxShadow: expanded ? 'none' : '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    color: expanded ? 'white' : 'rgb(115, 115, 115)',
    backgroundColor: expanded ? 'rgba(35, 166, 240, 1)' : 'white',
    '& path': {
        fill: expanded ? 'white' : 'rgb(115, 115, 115)',
        scale: 0.8,
        transform: 'translateX(10%) translateY(10%)',
    },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ expanded }) => ({
    backgroundColor: expanded ? 'rgba(235, 235, 235, 1)' : 'white',
    transition: 'background-color 0.3s ease-in-out',
    borderLeft: expanded ? '3px solid  rgba(35, 166, 240, 1)' : null,
    padding: '0 20px',
    '& .MuiTypography-root': {
        fontWeight: 700,
        fontSize: expanded ? 14 : 16,
        color: expanded ? 'rgba(35, 166, 240, 1)' : 'rgba(0, 0, 0, 0.87)',
    },
    borderRadius: '0px',
}));

const CollapseItem = ({ title, content, isOpened }) => {
    const [postState, setPostState] = useState(isOpened);

    const handleToggle = () => setPostState((prev) => !prev);

    return (
        <Accordion
            expanded={postState}
            onChange={handleToggle}
            sx={{
                boxShadow: 'none',
                border: '1px solid rgba(235, 235, 235, 1)',
                borderRadius: '0px',
            }}
        >
            <CustomAccordionSummary
                expandIcon={<CustomExpandIcon expanded={postState ? 1 : 0} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                expanded={postState ? 1 : 0}
                className="p-4"
            >
                <Typography>{title}</Typography>
            </CustomAccordionSummary>
            <AccordionDetails
                className="p-4"
                style={{
                    backgroundColor: '#EBEBEB',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 500,
                }}
            >
                {content}
            </AccordionDetails>
        </Accordion>
    );
};

export default CollapseItem;
