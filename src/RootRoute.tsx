import { useAuth } from 'modules/auth';
import { Outlet } from 'react-router-dom';

export function RootRoute(): JSX.Element {
  useAuth();
  return <Outlet />;
}
