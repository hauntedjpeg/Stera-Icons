import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeSimpleFillProps = Omit<IconBaseProps, 'children'>;

const HomeSimpleFill = memo(
  forwardRef<SVGSVGElement, HomeSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.99 2.06Q12 1.8 13 2.06c.8.22 1.49.78 2.48 1.55l3.55 2.77c.7.54 1.18.91 1.53 1.39q.45.61.65 1.34c.16.57.16 1.18.16 2.06v3.63q.01 1.34-.05 2.2c-.05.6-.15 1.13-.4 1.62-.4.78-1.03 1.41-1.8 1.8-.5.26-1.03.36-1.62.4q-.87.07-2.21.05H8.7q-1.34.01-2.2-.04c-.6-.05-1.13-.15-1.62-.4-.78-.4-1.41-1.03-1.8-1.8-.26-.5-.36-1.03-.4-1.62-.06-.6-.05-1.32-.05-2.21v-3.63c0-.88-.01-1.5.15-2.06q.2-.73.65-1.34c.35-.48.84-.85 1.53-1.4l3.55-2.76c.99-.77 1.68-1.33 2.48-1.55" />
    </IconBase>
  ))
);

HomeSimpleFill.displayName = 'HomeSimpleFill';

// Triple export pattern
export { HomeSimpleFill, HomeSimpleFill as HomeSimpleFillIcon, HomeSimpleFill as SiHomeSimpleFill };
export default HomeSimpleFill;
export type { HomeSimpleFillProps };
