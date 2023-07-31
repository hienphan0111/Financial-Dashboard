import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox';
import FlexBetween from '@/components/FlexBetween';
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from '@/states/api';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import React, { useMemo } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);

  const productColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'expense',
      headerName: 'Expense',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  const transactionsColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 1,
    },
    {
      field: 'buyer',
      headerName: 'Buyer',
      flex: 0.67,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'productIds',
      headerName: 'Count',
      flex: 0.35,
      renderCell: (params: GridCellParams) =>
        `${(params.value as Array<string>).length}`,
    },
  ];

  return (
    <>
      <DashboardBox bgcolor='#fff' gridArea='g'>
        <BoxHeader
          title='List of products'
          sideText={`${productData?.length} products`}
        />
        <Box
          mt='0.5rem'
          p='0 0.5rem'
          height='75%'
          sx={{
            '& .MuiDataGrid-root': {
              color: palette.grey[300],
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox bgcolor='#fff' gridArea='h'>
        <BoxHeader
          title='Recent Orders'
          sideText={`${transactionsData?.length} latest Transaction`}
        />
        <Box
          mt='0.5rem'
          p='0 0.5rem'
          height='80%'
          sx={{
            '& .MuiDataGrid-root': {
              color: palette.grey[300],
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionsData || []}
            columns={transactionsColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox bgcolor='#fff' gridArea='i'>
        <BoxHeader title='Expense Breakdown By category' sideText='+4%' />
        <FlexBetween mt='0.5rem' gap='0.5rem' p='0 1rem' textAlign='center'>
          {pieChartData?.map((data, i) => (
            <Box key={`${data.id}`}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke='none'
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey='value'
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant='h5'>{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox bgcolor='#fff' gridArea='j'>
        <BoxHeader
          title='Overall Summary and Explanation Data'
          sideText='+15%'
        />
        <Box
          height='15px'
          margin='1.25rem 1rem 0.4rem 1rem'
          bgcolor={palette.primary[800]}
          borderRadius='1rem'
        >
          <Box
            height='15px'
            bgcolor={palette.primary[600]}
            borderRadius='1rem'
            width='60%'
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
        The project features a dynamic home page, admin and user dashboards, user login page with professional handling of all kinds of validations, ability for a patient to select an appointment and view doctor information,
        </Typography>
      </DashboardBox>
    </>
  );
};

export default Row3;
