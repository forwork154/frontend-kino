import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { HeaderView } from './View';

export const Header = () => {
  const [activePath, setActivePath] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router.pathname]);

  return <HeaderView activePath={activePath} />;
};
