import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeHeartFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeHeartFillDuotone = memo(
  forwardRef<SVGSVGElement, HomeHeartFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.99 2.06a4 4 0 0 1 2.02 0c.8.22 1.49.78 2.48 1.55l3.55 2.77c.7.54 1.18.91 1.53 1.39q.45.61.65 1.34c.16.57.15 1.18.15 2.06v3.63q.01 1.34-.04 2.2c-.05.6-.15 1.13-.4 1.62-.4.78-1.03 1.41-1.8 1.8-.5.26-1.03.36-1.62.4q-.87.07-2.21.05H8.7q-1.34.01-2.2-.04a4 4 0 0 1-1.62-.4 4 4 0 0 1-1.8-1.8 4 4 0 0 1-.4-1.62q-.08-.89-.06-2.21v-3.63c0-.88 0-1.5.16-2.06q.2-.73.65-1.34c.35-.48.84-.85 1.53-1.4l3.55-2.76c.99-.77 1.68-1.33 2.48-1.55M13.9 9.5c-.85 0-1.58.5-1.91 1.21a2.1 2.1 0 0 0-4 .87c0 .9.49 1.6.69 1.88.95 1.32 2.27 2.22 3.31 3.04 1.04-.82 2.36-1.72 3.31-3.04.2-.28.69-.99.69-1.88 0-1.15-.94-2.08-2.1-2.08" clipRule="evenodd" opacity={.4} />
        <path d="M13.9 9.5c1.16 0 2.1.93 2.1 2.08 0 .9-.49 1.6-.69 1.88-.95 1.32-2.27 2.22-3.31 3.04-1.04-.82-2.36-1.72-3.31-3.04A3.3 3.3 0 0 1 8 11.58c0-1.15.94-2.08 2.1-2.08.84 0 1.57.5 1.9 1.21a2.1 2.1 0 0 1 1.9-1.21" />
    </IconBase>
  ))
);

HomeHeartFillDuotone.displayName = 'HomeHeartFillDuotone';

// Triple export pattern (lucide-react style)
export { HomeHeartFillDuotone, HomeHeartFillDuotone as HomeHeartFillDuotoneIcon, HomeHeartFillDuotone as SiHomeHeartFillDuotone };
export default HomeHeartFillDuotone;
export type { HomeHeartFillDuotoneProps };
