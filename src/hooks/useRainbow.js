import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useIntervalCount from 'hooks/useIntervalCount';

const rainbowColors = [
  'hsl(1deg, 96%, 55%)', // red
  'hsl(25deg, 100%, 50%)', // orange
  'hsl(40deg, 100%, 50%)', // yellow
  'hsl(45deg, 100%, 50%)', // yellow
  'hsl(66deg, 100%, 45%)', // lime
  'hsl(130deg, 100%, 40%)', // green
  'hsl(177deg, 100%, 35%)', // aqua
  'hsl(230deg, 100%, 45%)', // blue
  'hsl(240deg, 100%, 45%)', // indigo
  'hsl(260deg, 100%, 55%)', // violet
  'hsl(325deg, 100%, 48%)', // pink
];
const paletteSize = rainbowColors.length;

const useRainbow = (intervalDelay = 2000) => {
  const { current: uniqueId } = useRef(uuidv4());

  useEffect(() => {
    Array.from({ length: 3 }).forEach((el, idx) => {
      try {
        CSS.registerProperty({
          name: `--rainbow-color-${uniqueId}-${idx}`,
          // name: `--rainbow-color-${idx}`,
          initialValue: rainbowColors[idx],
          syntax: '<color>',
          inherits: false,
        });
      } catch (err) {
        console.log(err);
      }
    });
    // eslint-disable-next-line
  }, []);

  // Get an ever-incrementing number from another custom hook
  const intervalCount = useIntervalCount(intervalDelay);

  // Using that interval count, derive each current color value
  return {
    [`--rainbow-color-${uniqueId}-0`]:
      rainbowColors[(intervalCount + 1) % paletteSize],
    [`--rainbow-color-${uniqueId}-1`]:
      rainbowColors[(intervalCount + 2) % paletteSize],
    [`--rainbow-color-${uniqueId}-2`]:
      rainbowColors[(intervalCount + 3) % paletteSize],
  };
};

export default useRainbow;

/**
 * https://www.joshwcomeau.com/react/rainbow-button/
 */
