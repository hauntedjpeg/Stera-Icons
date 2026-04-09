import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeFillProps = Omit<IconBaseProps, 'children'>;

const HomeFill = memo(
  forwardRef<SVGSVGElement, HomeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-fill" {...props}>
      <path fillRule="evenodd" d="M10.99 2.07a4 4 0 0 1 2.02 0c.8.21 1.49.77 2.48 1.54l3.55 2.77c.7.54 1.18.91 1.53 1.39q.45.61.65 1.34c.16.57.16 1.18.16 2.06v3.63q.01 1.34-.05 2.2c-.05.6-.15 1.13-.4 1.62-.4.78-1.03 1.41-1.8 1.8-.5.26-1.03.36-1.62.4-.59.06-1.31.05-2.21.05H8.7q-1.34.01-2.2-.04a4 4 0 0 1-1.62-.4 4 4 0 0 1-1.8-1.8 4 4 0 0 1-.4-1.62q-.07-.87-.06-2.21v-3.63c0-.88 0-1.49.16-2.06q.2-.73.65-1.34c.35-.48.84-.85 1.53-1.39l3.55-2.77c1-.77 1.68-1.33 2.48-1.54m.01 9.18c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeFill.displayName = 'HomeFill';

// Triple export pattern (lucide-react style)
export { HomeFill, HomeFill as HomeFillIcon, HomeFill as SiHomeFill };
export default HomeFill;
export type { HomeFillProps };
