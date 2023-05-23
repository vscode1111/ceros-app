import { IIconItem, useSocialList } from 'modules/common';
import { Link } from 'react-router-dom';
import { uid } from 'react-uid';
import { useNetworkListStyles } from './useNetworkListStyles';

function NetworkItem({
  Icon,
  href = '/',
  className,
}: IIconItem & { className?: string }) {
  const { classes, cx } = useNetworkListStyles();
  return (
    <Link className={cx(classes.link, className)} to={href}>
      {Icon}
    </Link>
  );
}

export function NetworkList({
  linkClassName,
}: {
  linkClassName?: string;
}): JSX.Element {
  const { classes, cx } = useNetworkListStyles();
  const list = useSocialList();
  return (
    <div className={classes.socialContainer}>
      {list.map(item => (
        <NetworkItem
          className={cx(classes.link, linkClassName)}
          key={uid(item)}
          Icon={item.Icon}
          href={item.href}
          caption={item.caption}
        />
      ))}
    </div>
  );
}
