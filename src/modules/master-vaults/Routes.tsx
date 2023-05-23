import { generatePath, Route } from 'react-router-dom';
import { ROOT_PATH } from 'modules/common';
import { GuardRoute } from 'modules/navigation';
import { createRouteConfig } from 'utils';
import { Dashboard } from 'modules/master-vaults/Dashboard/Dashboard';
import { Stats } from 'modules/master-vaults/Stats/Stats';
import { CreateVault } from './CreateVault';
import { AddStrategy } from './AddStrategy/AddStrategy';

const PATH = `${ROOT_PATH}master-vaults`;
const CREATE_PATH = `${ROOT_PATH}master-vaults/create`;
const STATS_PATH = `${ROOT_PATH}master-vaults/stats`;
const ADD_STRATEGY_PATH = `${ROOT_PATH}master-vaults/add-strategy`;

export const MasterVaultsRoutesConfig = createRouteConfig(
  {
    dashboard: {
      path: PATH,
      generatePath: () => generatePath(PATH),
    },
    create: {
      path: CREATE_PATH,
      generatePath: () => generatePath(CREATE_PATH),
    },
    stats: {
      path: STATS_PATH,
      generatePath: () => generatePath(STATS_PATH),
    },
    addStrategy: {
      path: ADD_STRATEGY_PATH,
      generatePath: () => generatePath(ADD_STRATEGY_PATH),
    },
  },
  PATH,
);

export function getMasterVaultRoutes(): JSX.Element {
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
        path={CREATE_PATH}
        element={
          <GuardRoute>
            <CreateVault />
          </GuardRoute>
        }
      />
      <Route
        path={STATS_PATH}
        element={
          <GuardRoute>
            <Stats />
          </GuardRoute>
        }
      />
      <Route
        path={ADD_STRATEGY_PATH}
        element={
          <GuardRoute>
            <AddStrategy />
          </GuardRoute>
        }
      />
    </>
  );
}
