import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';
import { ReactComponent as QuestionSVG } from './assets/question.svg';

interface Props extends Omit<TooltipProps, 'children'> {
  iconClassName?: string;
}

export function Tooltip({
  className,
  iconClassName,
  ...props
}: Props): JSX.Element {
  return (
    <MuiTooltip {...props} className={className}>
      <QuestionSVG className={iconClassName} />
    </MuiTooltip>
  );
}
