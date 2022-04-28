import React from 'react';
import Grid from '@material-ui/core/Grid';

// components
import Title from '../../Components/typography/title';
import PageContent from '../../Components/page-content';
import TableBC from '../../Components/table';

// const ref = React.createRef();
const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'ativ', label: 'Atividades', minWidth: 170, align: 'left' },
];

function RenderAtividades() {
  return (
    <div>
      <span>Produção pó</span>,<span> Recebimento Matéria-prima</span>,
      <span>Produção produto final</span>,<span> Estoque Matéria-prima</span>,
      <span> Estoque Produto final</span>,
      <span> Controle sobre Matéria-prima</span>,
      <span> Envio para o Correios</span>
    </div>
  );
}

const rows = [
  {
    id: 0,
    name: 'Domingues',
    ativ: <RenderAtividades />,
  },
];

function Collaborator() {
  return (
    <div>
      <PageContent>
        <Grid item xs={12}>
          <Title>Colaboradores</Title>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableBC columns={columns} rows={rows} />
          </Grid>
        </Grid>
      </PageContent>
    </div>
  );
}

export default Collaborator;
