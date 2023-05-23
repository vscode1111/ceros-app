import { generatePath, Route } from 'react-router-dom';
import { ROOT_PATH } from 'modules/common';
import { GuardRoute } from 'modules/navigation';
import { createRouteConfig } from 'utils';

const PATH = `${ROOT_PATH}docs`;
const BORROW_PATH = `${ROOT_PATH}borrow`;

export const DocsRoutesConfig = createRouteConfig(
  {
    dashboard: {
      path: PATH,
      generatePath: () => generatePath(PATH),
    },
    borrow: {
      path: BORROW_PATH,
      generatePath: () => generatePath(BORROW_PATH),
    },
  },
  PATH,
);

export function getDocsRoutes(): JSX.Element {
  return (
    <>
      {/* TODO: Put dashboard route into dashboard module */}
      <Route
        path={DocsRoutesConfig.root}
        element={
          <GuardRoute>
            <div />
          </GuardRoute>
        }
      />
      <Route
        path={DocsRoutesConfig.borrow.generatePath()}
        element={
          <GuardRoute>
            <div />
          </GuardRoute>
        }
      />
    </>
  );
}
