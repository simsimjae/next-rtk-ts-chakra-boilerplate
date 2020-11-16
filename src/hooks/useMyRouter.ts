import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface Props {
  prevPageUrl?: string;
}

const useMyRouter = (props?: Props) => {
  const router = useRouter();
  const safeHistoryBack = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (window.history.length > 2) router.back();
    else router.push(props.prevPageUrl);
  }, []);

  return { ...router, back: safeHistoryBack };
};

useMyRouter.defaultProps = {
  prevPageUrl: '/',
};

export default useMyRouter;
