import React from "react";
import { Provider } from 'react-redux';
import { store } from '../../state/store';

export const Layout = ({ children }: any) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Layout;
