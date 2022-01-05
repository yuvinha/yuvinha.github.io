import { useState } from 'react';
import useInterval from 'hooks/useInterval';

const useIntervalCount = (delay = 1000) => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  return count;
};

export default useIntervalCount;
