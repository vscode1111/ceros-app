import { SwitchActionForm } from './components/SwitchActionForm';

export function Withdraw(): JSX.Element {
  return <SwitchActionForm selector={vault => vault.withdrawForm} />;
}
