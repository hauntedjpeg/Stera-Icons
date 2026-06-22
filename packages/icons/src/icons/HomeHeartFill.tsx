import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeHeartFillProps = Omit<IconBaseProps, 'children'>;

const HomeHeartFill = memo(
  forwardRef<SVGSVGElement, HomeHeartFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.99 2.07a4 4 0 0 1 2.02 0c.8.21 1.49.77 2.48 1.54l3.55 2.77c.7.54 1.18.91 1.53 1.39q.45.61.65 1.34c.16.57.16 1.18.16 2.06v3.63q.01 1.34-.05 2.2c-.05.6-.15 1.13-.4 1.62-.4.78-1.03 1.41-1.8 1.8-.5.26-1.03.36-1.62.4-.59.06-1.31.05-2.21.05H8.7q-1.34.01-2.2-.04a4 4 0 0 1-1.62-.4 4 4 0 0 1-1.8-1.8 4 4 0 0 1-.4-1.62c-.06-.59-.05-1.31-.05-2.21v-3.63c0-.88-.01-1.49.15-2.06q.2-.73.65-1.34c.35-.48.84-.85 1.53-1.39l3.55-2.77c1-.77 1.68-1.33 2.48-1.54M13.9 9.5c-.85 0-1.58.5-1.91 1.21a2.1 2.1 0 0 0-4 .87c0 .9.49 1.6.69 1.88.95 1.32 2.27 2.22 3.31 3.04 1.04-.82 2.36-1.72 3.31-3.04.2-.28.69-.99.69-1.88 0-1.15-.94-2.08-2.1-2.08" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeHeartFill.displayName = 'HomeHeartFill';

// Triple export pattern (lucide-react style)
export { HomeHeartFill, HomeHeartFill as HomeHeartFillIcon, HomeHeartFill as SiHomeHeartFill };
export default HomeHeartFill;
export type { HomeHeartFillProps };
