import { SwitchActionForm } from './components/SwitchActionForm';

export function Claim(): JSX.Element {
  return <SwitchActionForm selector={vault => vault.claimForm} />;
}
