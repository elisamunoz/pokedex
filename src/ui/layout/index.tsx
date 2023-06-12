import React from "react";
import type { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/useSitemMetadata';

export const Layout = ({ children }: PropsWithChildren) => {
  const { title, description, theme_color } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        {/* Colors on browser header (mobile) */}
        <meta content={theme_color} name="theme-color" />
        <meta content={theme_color} name="msapplication-navbutton-color" />
        <meta content={theme_color} name="apple-mobile-web-app-status-bar-style" />

        {/* Add to home screen for Safari on iOS */}
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content={theme_color} name="apple-mobile-web-app-status-bar-style" />
        <meta content={theme_color} name="apple-mobile-web-app-title" />
        {/* <link rel="apple-touch-icon" href="./icons/launcher/icon-152x152.png" sizes="152x152" /> */}

        {/* Tile Icon for Windows */}
        <meta content="no" name="msapplication-tap-highlight" />
        {/* <meta content="./icons/launcher/icon-144x144.png" name="msapplication-TileImage" /> */}
        <meta content={theme_color} name="msapplication-TileColor" />

        {/* <link rel="icon" href="./icons/favicon.png" type="image/png" /> */}
      </Helmet>
      {children}
    </>
  )
};

export default Layout;