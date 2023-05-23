import { SwitchActionForm } from './components/SwitchActionForm';

export function Deposit(): JSX.Element {
  return <SwitchActionForm selector={vault => vault.depositForm} />;
}
