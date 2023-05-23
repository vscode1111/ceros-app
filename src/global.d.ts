import Web3 from 'web3';
import { RequestAction } from '@redux-requests/core';


import { Colors } from './modules/common/consts';
import { AppDispatch as Dispatch, RootState as State } from './store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum: any;
    web3: Web3;
  }

  type RootState = State;
  type AppDispatch = Dispatch;
}

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    red: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    tiny: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors;
  }

  interface ThemeOptions {
    colors: Colors;
  }
}

declare module 'redux-smart-actions' {
  export type CreateActionResult<
    Output extends RequestAction,
    Input extends unknown[] = unknown,
  > = (...params: Input) => Output;

  function createAction<
    Output extends RequestAction,
    Input extends unknown[] = unknown,
  >(
    name: string,
    action?: (...params: Input) => Output,
  ): CreateActionResult<Output>;
}

declare module 'react' {
  function forwardRef<T, P = Record<string, unknown>>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
