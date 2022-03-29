import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../_dashboard/charts';

// ----------------------------------------------------------------------

export default function ChartBarComponent(props) {
  const dailyStatus = props.dailyStatus;
  const CHART_DATA = [
    {
      data: Object.keys(dailyStatus).map((keyName, i) => {
        return [
          (dailyStatus[keyName].end_balance - dailyStatus[keyName].start_balance) * 0.000000001
        ].join(',');
      })
    }
  ];
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: false, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: Object.keys(dailyStatus).map((keyName, i) => {
        return [dailyStatus[keyName].day].join(',');
      })
    }
  });

  return (
    <Card>
      <CardHeader title="Validator Rewards" subheader="From Genesis" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
