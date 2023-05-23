import { useTokenListItemStyles } from './useTokenListItemStyles';

interface TokenListItem {
  icon: string;
  title: string;
  value: string;
}

export function TokenListItem({
  icon,
  title,
  value,
}: TokenListItem): JSX.Element {
  const { classes } = useTokenListItemStyles();
  return (
    <>
      <div className={classes.root}>
        <img className={classes.icon} src={icon} alt="icon" />
        <div>{title}</div>
      </div>
      <div className={classes.value}>{value}</div>
    </>
  );
}
