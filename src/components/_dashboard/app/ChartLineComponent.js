import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
import { fNumber } from '../../../utils/formatNumber';
import { BaseOptionChart } from '../../_dashboard/charts';;

// ----------------------------------------------------------------------

export default function ChartLineComponent(props) {
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
      <CardHeader title="Validator Rewards" subheader="From genesis" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
