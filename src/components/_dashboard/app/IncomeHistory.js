import * as React from 'react';
import { Card, CardHeader, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IncomeInEUR, IncomeInGBP, IncomeInUSD, IncomeInETH } from '.';
import { Icon } from '@iconify/react';

export default function IncomeHistory(props) {
  const [selectCurrency, setselectCurrency] = React.useState('');

  const handleChange = (event) => {
    setselectCurrency(event.target.value);
  };
  const performanceData = props.performanceData;
  //usd
  const usdPrice = props.ethPriceUSD;

  //gbp price
  const gbpPrice = props.ethPriceGBP;

  // eurprice
  const eurPrice = props.ethPriceEUR;
  return (
    <Card>
      <CardHeader
        title={
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectCurrency}
              onChange={handleChange}
              placeholder="ETH"
            >
              <MenuItem value={1}>
                <Icon icon="cib:ethereum" /> ETH
              </MenuItem>
              <MenuItem value={2}>
                <Icon icon="ion:logo-usd" /> USD
              </MenuItem>
              <MenuItem value={3}>
                <Icon icon="el:eur" /> EUR
              </MenuItem>
              <MenuItem value={4}>
                <Icon icon="el:gbp" /> GBP
              </MenuItem>
            </Select>
          </FormControl>
        }
        align="right"
      ></CardHeader>
      {selectCurrency === 2 ? (
        <IncomeInUSD ethPriceUSD={usdPrice} performanceData={props.performanceData} />
      ) : selectCurrency === 3 ? (
        <IncomeInEUR ethPriceEUR={eurPrice} performanceData={props.performanceData} />
      ) : selectCurrency === 4 ? (
        <IncomeInGBP ethPriceGBP={gbpPrice} performanceData={performanceData} />
      ) : (
        <IncomeInETH performanceData={performanceData} />
      )}
    </Card>
  );
}
