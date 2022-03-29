import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;
const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(0)
}));
// ----------------------------------------------------------------------

export default function ValidatorTimeline(props) {
  OrderItem.propTypes = {
    item: PropTypes.object,
    isLast: PropTypes.bool
  };
  function OrderItem({ item, isLast }) {
    const { type, title, epoch } = item;
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              bgcolor:
                (type === 'DepositedEpoch' && 'info.main') ||
                (type === 'ActivationEpoch' && 'primary.main') ||
                (type === 'ActivationStatus' && 'success.main') ||
                (type === 'order4' && 'warning.main') ||
                'error.main'
            }}
          />
          {isLast ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {epoch}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  }
  const TIMELINES = [
    {
      title: 'Deposited Epoch',
      epoch:
        props.activationeligibilityepoch === 0 ? 'Genesis[0]' : props.activationeligibilityepoch,
      type: 'DepositedEpoch'
    },
    {
      title: 'Activation Epoch',
      epoch: props.activationepoch === 0 ? 'Genesis[0]' : props.activationepoch,
      type: 'ActivationEpoch'
    },

    {
      title: 'Activation Status',
      epoch: props.status,
      type: 'ActivationStatus'
    },
    {
      title: 'Exited',
      epoch: props.slashed === false ? 'Not Slashed' : 'Slashed',
      type: 'ExitedStatus'
    }
  ];
  return (
    <ChartWrapperStyle>
      <Card
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none'
          }
        }}
      >
        <CardHeader title="Validator Timeline" />
        <CardContent>
          <Timeline>
            {TIMELINES.map((item, index) => (
              <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </ChartWrapperStyle>
  );
}
