import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersFillProps = Omit<IconBaseProps, 'children'>;

const RulersFill = memo(
  forwardRef<SVGSVGElement, RulersFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rulers-fill" {...props}>
      <path fillRule="evenodd" d="M19.75 2.13c1.17 0 2.13.95 2.13 2.12v3.5c0 1.17-.96 2.12-2.13 2.13H9.88v9.87c0 1.17-.96 2.13-2.13 2.13h-3.5a2.13 2.13 0 0 1-2.12-2.13V4c0-1.04.83-1.87 1.87-1.87zM3.88 19.75c0 .2.16.37.37.38h3.5c.2 0 .38-.17.38-.38v-1.87H7a.88.88 0 0 1 0-1.75h1.13v-2.25H7a.88.88 0 0 1 0-1.76h1.13V9.89H3.87zm6-11.62h2.24V7a.88.88 0 0 1 1.76 0v1.13h2.24V7a.88.88 0 0 1 1.75 0v1.13h1.88c.2 0 .37-.17.38-.38v-3.5c0-.2-.17-.37-.38-.37H9.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulersFill.displayName = 'RulersFill';

// Triple export pattern (lucide-react style)
export { RulersFill, RulersFill as RulersFillIcon, RulersFill as SiRulersFill };
export default RulersFill;
export type { RulersFillProps };
