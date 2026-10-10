import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldFillProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldFill = memo(
  forwardRef<SVGSVGElement, SoccerFieldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 8.74c-1.44.38-2.5 1.7-2.5 3.26s1.06 2.87 2.5 3.26v5.62H4c-1.59 0-2.87-1.3-2.87-2.88v-2.12H5c.48 0 .88-.4.88-.88V9c0-.48-.4-.87-.88-.87H1.13V6C1.13 4.41 2.4 3.13 4 3.13h7.13zM20 3.13c1.59 0 2.88 1.28 2.88 2.87v2.13H19c-.48 0-.87.39-.87.87v6c0 .48.39.88.87.88h3.88V18c0 1.59-1.3 2.88-2.88 2.88h-7.12v-5.62c1.43-.39 2.5-1.7 2.5-3.26s-1.07-2.88-2.5-3.26V3.13z" />
        <path d="M22.88 14.13h-3V9.87h3zM4.13 14.13h-3V9.87h3zM12 10.38c.9 0 1.63.72 1.63 1.62s-.73 1.63-1.63 1.63-1.62-.73-1.62-1.63.72-1.62 1.62-1.62" />
    </IconBase>
  ))
);

SoccerFieldFill.displayName = 'SoccerFieldFill';

// Triple export pattern
export { SoccerFieldFill, SoccerFieldFill as SoccerFieldFillIcon, SoccerFieldFill as SiSoccerFieldFill };
export default SoccerFieldFill;
export type { SoccerFieldFillProps };
