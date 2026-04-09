import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomePlusFillProps = Omit<IconBaseProps, 'children'>;

const HomePlusFill = memo(
  forwardRef<SVGSVGElement, HomePlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-plus-fill" {...props}>
      <path fillRule="evenodd" d="M10.99 2.07a4 4 0 0 1 2.02 0c.8.21 1.49.77 2.48 1.54l3.55 2.77c.7.54 1.18.91 1.53 1.39q.45.61.65 1.34c.16.57.15 1.18.15 2.06v3.63q.01 1.34-.04 2.2c-.05.6-.15 1.13-.4 1.62-.4.78-1.03 1.41-1.8 1.8-.5.26-1.03.36-1.62.4-.59.06-1.31.05-2.21.05H8.7q-1.34.01-2.2-.04a4 4 0 0 1-1.62-.4 4 4 0 0 1-1.8-1.8 4 4 0 0 1-.4-1.62q-.08-.87-.06-2.21v-3.63c0-.88 0-1.49.16-2.06q.2-.73.65-1.34c.35-.48.84-.85 1.53-1.39l3.55-2.77c.99-.77 1.68-1.33 2.48-1.54M12 8.62c-.48 0-.88.4-.88.88v2.13H9a.87.87 0 1 0 0 1.74h2.12v2.13a.88.88 0 0 0 1.75 0v-2.12H15a.87.87 0 1 0 0-1.76h-2.13V9.5c0-.48-.39-.88-.87-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

HomePlusFill.displayName = 'HomePlusFill';

// Triple export pattern (lucide-react style)
export { HomePlusFill, HomePlusFill as HomePlusFillIcon, HomePlusFill as SiHomePlusFill };
export default HomePlusFill;
export type { HomePlusFillProps };
