import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShuffleRegularProps = Omit<IconBaseProps, 'children'>;

const ShuffleRegular = memo(
  forwardRef<SVGSVGElement, ShuffleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 6.25c1.33 0 2.4.83 3.25 1.82.87 1 1.65 2.31 2.4 3.54.75 1.27 1.47 2.46 2.23 3.34Q15 16.26 16 16.25h3.19l-1.22-1.22c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.5 2.5q.22.22.22.53t-.22.53l-2.5 2.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.22-1.22H16c-1.33 0-2.4-.83-3.25-1.82-.87-1-1.65-2.31-2.4-3.54-.75-1.27-1.47-2.46-2.23-3.34Q7 7.74 6 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM8.6 14.36c.24-.33.71-.4 1.04-.15.33.24.4.72.15 1.05-.96 1.29-2.19 2.49-3.79 2.49H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.82 0 1.65-.63 2.6-1.9" />
        <path d="M17.97 3.97c.3-.3.77-.3 1.06 0l2.5 2.5q.22.22.22.53t-.22.53l-2.5 2.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.22-1.22H16c-.82 0-1.65.63-2.6 1.9-.24.33-.71.4-1.04.15s-.4-.72-.16-1.05c.97-1.3 2.2-2.5 3.8-2.5h3.19l-1.22-1.22c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ShuffleRegular.displayName = 'ShuffleRegular';

// Triple export pattern
export { ShuffleRegular, ShuffleRegular as ShuffleRegularIcon, ShuffleRegular as SiShuffleRegular };
export default ShuffleRegular;
export type { ShuffleRegularProps };
