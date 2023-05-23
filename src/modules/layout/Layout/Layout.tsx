import { CSSProperties, ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useLayoutStyles } from './useLayoutStyles';
import { useDispatchRequest, useQuery } from '@redux-requests/react';
import { storeAuthModal, storeLoadingOverlay } from 'store';
import { LoadingOverlay } from 'modules/common';
import { AuthModal } from 'modules/auth';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
}

export function Layout({
  children,
  className,
  style,
  contentStyle,
}: Props): JSX.Element {
  const { classes, cx } = useLayoutStyles();
  const dispatch = useDispatchRequest();
  const { data: isLoadingOverlay } = useQuery({
    type: storeLoadingOverlay,
  });
  const { data: isAuthModal } = useQuery({
    type: storeAuthModal,
  });

  return (
    <div className={cx(classes.root, className)} style={style}>
      {isLoadingOverlay && <LoadingOverlay />}
      <AuthModal
        open={isAuthModal ?? false}
        onClose={() => dispatch(storeAuthModal(false))}
      />
      <Header className={classes.header} />
      <div className={classes.content} style={contentStyle}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
