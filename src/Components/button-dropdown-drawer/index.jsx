import React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';

function DropDown({ title, childrenDropDown }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <MuiAccordion
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        elevation={0}
      >
        <MuiAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={title} />
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <div>
            {childrenDropDown.map((x) => (
              <ListItem button key="1">
                <ListItemText primary={x} />
              </ListItem>
            ))}
          </div>
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  );
}

export default DropDown;
