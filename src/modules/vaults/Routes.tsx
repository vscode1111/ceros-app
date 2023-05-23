import { generatePath, Route } from 'react-router-dom';
import { ROOT_PATH } from 'modules/common';
import { GuardRoute } from 'modules/navigation';
import { createRouteConfig } from 'utils';
import { Dashboard } from './Dashboard/Dashboard';
import { Deposit } from './Deposit';
import { Withdraw } from './Withdraw';
import { Claim } from './Claim';

const PATH = `${ROOT_PATH}vaults`;
const DEPOSIT_PATH = `${ROOT_PATH}vaults/:vaultId/deposit`;
const WITHDRAW_PATH = `${ROOT_PATH}vaults/:vaultId/withdraw`;
const CLAIM_PATH = `${ROOT_PATH}vaults/:vaultId/claim`;

export const VaultsRoutesConfig = createRouteConfig(
  {
    dashboard: {
      path: PATH,
      generatePath: () => generatePath(PATH),
    },
    deposit: {
      path: DEPOSIT_PATH,
      generatePath: (vaultId: string) =>
        generatePath(DEPOSIT_PATH, { vaultId }),
    },
    withdraw: {
      path: WITHDRAW_PATH,
      generatePath: (vaultId: string) =>
        generatePath(WITHDRAW_PATH, { vaultId }),
    },
    claim: {
      path: CLAIM_PATH,
      generatePath: (vaultId: string) => generatePath(CLAIM_PATH, { vaultId }),
    },
  },
  PATH,
);

export function getVaultsRoutes(): JSX.Element {
  return (
    <>
      <Route
        path={PATH}
        element={
          <GuardRoute>
            <Dashboard />
          </GuardRoute>
        }
      />
      <Route
        path={DEPOSIT_PATH}
        element={
          <GuardRoute>
            <Deposit />
          </GuardRoute>
        }
      />
      <Route
        path={WITHDRAW_PATH}
        element={
          <GuardRoute>
            <Withdraw />
          </GuardRoute>
        }
      />
      <Route
        path={CLAIM_PATH}
        element={
          <GuardRoute>
            <Claim />
          </GuardRoute>
        }
      />
    </>
  );
}
