import { DispatchRequest } from '@redux-requests/core';
import { storeCurrency, CurrencyOption } from './storeCurrency';
import { getaBNBcBalance } from './getaBNBcBalance';
import { getaBNBcPrice } from './getaBNBcPrice';
import { getaBNBcRatio } from './getaBNBcRatio';
import { getAccount } from './getAccount';
import { getBNBPrice } from './getBNBPrice';
import { getChainId } from './getChainId';
import { getNativeBalance } from './getNativeBalance';
import {
  getYieldConverterCeTokenBalance,
  getYieldConverterName,
} from 'modules/vaults';

export async function getApplicationData(
  dispatch: DispatchRequest,
  bypassConnect = false,
): Promise<void> {
  if (!bypassConnect) {
    await Promise.all([dispatch(getAccount()), dispatch(getChainId())]);
  }
  void dispatch(storeCurrency(CurrencyOption.USD));

  await dispatch(getBNBPrice());
  await dispatch(getaBNBcPrice());

  void dispatch(getNativeBalance());
  void dispatch(getaBNBcBalance());
  void dispatch(getaBNBcRatio());
  void dispatch(getYieldConverterName());
  void dispatch(getYieldConverterCeTokenBalance());
}
