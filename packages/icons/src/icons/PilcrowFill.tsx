import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowFillProps = Omit<IconBaseProps, 'children'>;

const PilcrowFill = memo(
  forwardRef<SVGSVGElement, PilcrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 3.13c.48 0 .88.39.88.87s-.4.88-.88.88h-1.12V20c0 .48-.4.88-.88.88s-.87-.4-.87-.88V4.88h-2.25V20c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-5.12H10c-3.24 0-5.87-2.64-5.87-5.88S6.76 3.13 10 3.13z" />
    </IconBase>
  ))
);

PilcrowFill.displayName = 'PilcrowFill';

// Triple export pattern
export { PilcrowFill, PilcrowFill as PilcrowFillIcon, PilcrowFill as SiPilcrowFill };
export default PilcrowFill;
export type { PilcrowFillProps };
