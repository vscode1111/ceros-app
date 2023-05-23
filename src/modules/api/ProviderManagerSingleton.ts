import { ProviderManager } from '@ankr.com/provider';
import { COLORS } from 'modules/common';
import { ThemeColors } from 'web3modal';

export const web3ModalTheme: ThemeColors = {
  background: COLORS.gray300,
  main: 'rgb(199,199,199)',
  secondary: 'rgb(136,136,136)',
  border: 'rgba(195,195,195,0.14)',
  hover: 'rgb(16,26,32)',
};

export class ProviderManagerSingleton {
  private static instance: ProviderManager;

  public static getInstance(): ProviderManager {
    if (ProviderManagerSingleton.instance) {
      return ProviderManagerSingleton.instance;
    }
    ProviderManagerSingleton.instance = new ProviderManager(web3ModalTheme);
    return ProviderManagerSingleton.instance;
  }
}
