import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { t } from 'modules/i18n';
import { getDocsRoutes } from './modules/docs';
import { getVaultsRoutes } from './modules/vaults';
import { getMasterVaultRoutes } from './modules/master-vaults';
import { RootRoute } from './RootRoute';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" element={<RootRoute />}>
        <Route path="/" element={<Navigate to="vaults" replace />} />
        {getVaultsRoutes()}
        {getDocsRoutes()}
        {getMasterVaultRoutes()}
        <Route>{t('routes.page-not-found')}</Route>
      </Route>
    </Switch>
  );
}
