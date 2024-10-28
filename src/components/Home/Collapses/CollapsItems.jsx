import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const CollapsItems = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="p-4"
                >
                    Kenapa ya pembayaranku gagal banh? 😁{' '}
                </AccordionSummary>
                <AccordionDetails
                    className="p-4"
                    style={{
                        backgroundColor: '#EBEBEB',
                        padding: '16px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className="p-4"
                >
                    Apakah rehan wangsaff adalah CEO dari Destinize? 😅😅😅{' '}
                </AccordionSummary>
                <AccordionDetails
                    className="p-4"
                    style={{
                        backgroundColor: '#EBEBEB',
                        padding: '16px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    <p
                        className="py-3 px-3"
                        style={{
                            borderLeft: '3px solid #23A6F0',
                            fontWeight: 'bold',
                            color: '#23A6F0',
                        }}
                    >
                        Kenapa harus memilih Destinize?
                    </p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, wh
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className="p-4"
                >
                    Apa rekomendasi tempat buat orang yang jomblo? 😥
                </AccordionSummary>
                <AccordionDetails
                    className="p-4"
                    style={{
                        backgroundColor: '#EBEBEB',
                        padding: '16px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className="p-4"
                >
                    Apa rekomendasi tempat buat orang yang jomblo? 😥
                </AccordionSummary>
                <AccordionDetails
                    className="p-4"
                    style={{
                        backgroundColor: '#EBEBEB',
                        padding: '16px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default CollapsItems;
