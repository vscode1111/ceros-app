import { useAddressList } from './useAddressList';
import { ReactComponent as CloseIcon } from 'modules/common/components/Modal/assets/close.svg';

interface AddressProps {
  whitelistAddress: string[];
  handleRemoveAddress: (item: string) => void;
}

export function AddressList({
  whitelistAddress,
  handleRemoveAddress,
}: AddressProps): JSX.Element {
  const { classes } = useAddressList();

  return (
    <div className={classes.root}>
      {whitelistAddress.map(item => (
        <div key={item} className={classes.itemWrapper}>
          {item}
          <CloseIcon
            className={classes.closeIcon}
            onClick={() => handleRemoveAddress(item)}
          />
        </div>
      ))}
    </div>
  );
}
