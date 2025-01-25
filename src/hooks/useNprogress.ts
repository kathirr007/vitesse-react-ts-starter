import NProgress from 'nprogress';
import { useEffect } from 'react';

import { useFetchers, useNavigation } from 'react-router';

export function useNProgress() {
  const navigation = useNavigation();

  const fetchers = useFetchers();

  useEffect(() => {
    NProgress.start();

    const fetchersIdle = fetchers.every(f => f.state === 'idle');
    if (navigation.state === 'idle' && fetchersIdle) {
      NProgress.done();
    }
  }, [navigation.state, fetchers]);
}
