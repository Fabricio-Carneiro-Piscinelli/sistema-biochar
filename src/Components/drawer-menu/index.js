import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

// components
import ButtonAppBar from '../app-bar';
import DropDown from '../button-dropdown-drawer';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

function ListComp(toggleDrawer) {
  const DropDownCommercial = [
    'Gerador de orçamento',
    'Rotas de vendas',
    'Clientes',
    'Gerador de pedidos',
  ];

  const DropDownExpedition = ['Pedidos'];

  const DropDownPurchases = ['Fornecedores'];

  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem button key="0">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="1">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Colaboradores" />
        </ListItem>

        <ListItem button key="2">
          <DropDown title="Comercial" childrenDropDown={DropDownCommercial} />
        </ListItem>
        <ListItem button key="3">
          <DropDown title="Expedição" childrenDropDown={DropDownExpedition} />
        </ListItem>
        <ListItem button key="4">
          <DropDown title="Compras`" childrenDropDown={DropDownPurchases} />
        </ListItem>
      </List>
      <ListItem button key="5">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Treinamentos" />
      </ListItem>
      <ListItem button key="6">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Documentos" />
      </ListItem>
    </div>
  );
}

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open_) => {
    setOpen(open_);
  };

  // console.log(list);
  return (
    <div>
      <ButtonAppBar toggleDrawer={toggleDrawer} />
      <React.Fragment key={0}>
        <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
          <ListComp toggleDrawer={toggleDrawer} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
