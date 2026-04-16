import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeSimpleFillProps = Omit<IconBaseProps, 'children'>;

const HomeSimpleFill = memo(
  forwardRef<SVGSVGElement, HomeSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.99 2.06a4 4 0 0 1 2.02 0c.8.22 1.49.78 2.48 1.55l3.55 2.77c.7.54 1.18.91 1.53 1.39q.45.61.65 1.34c.16.57.15 1.18.15 2.06v3.63q.01 1.34-.04 2.2c-.05.6-.15 1.13-.4 1.62-.4.78-1.03 1.41-1.8 1.8-.5.26-1.03.36-1.62.4q-.87.07-2.21.05H8.7q-1.34.01-2.2-.04a4 4 0 0 1-1.62-.4 4 4 0 0 1-1.8-1.8 4 4 0 0 1-.4-1.62q-.08-.89-.06-2.21v-3.63c0-.88 0-1.5.16-2.06q.2-.73.65-1.34c.35-.48.84-.85 1.53-1.4l3.55-2.76c.99-.77 1.68-1.33 2.48-1.55" />
    </IconBase>
  ))
);

HomeSimpleFill.displayName = 'HomeSimpleFill';

// Triple export pattern (lucide-react style)
export { HomeSimpleFill, HomeSimpleFill as HomeSimpleFillIcon, HomeSimpleFill as SiHomeSimpleFill };
export default HomeSimpleFill;
export type { HomeSimpleFillProps };
