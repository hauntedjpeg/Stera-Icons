import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldFillProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldFill = memo(
  forwardRef<SVGSVGElement, SoccerFieldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 8.74a3.38 3.38 0 0 0 0 6.52v5.62H4A2.9 2.9 0 0 1 1.13 18v-2.12H5c.48 0 .88-.4.88-.88V9c0-.48-.4-.87-.88-.87H1.13V6A2.87 2.87 0 0 1 4 3.13h7.13zM20 3.13A2.9 2.9 0 0 1 22.88 6v2.13H19c-.48 0-.87.39-.87.87v6c0 .48.39.88.87.88h3.88V18A2.9 2.9 0 0 1 20 20.88h-7.12v-5.62a3.38 3.38 0 0 0 0-6.52V3.13z" />
        <path d="M22.88 14.13h-3V9.87h3zM4.13 14.13h-3V9.87h3zM12 10.38a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.24" />
    </IconBase>
  ))
);

SoccerFieldFill.displayName = 'SoccerFieldFill';

// Triple export pattern (lucide-react style)
export { SoccerFieldFill, SoccerFieldFill as SoccerFieldFillIcon, SoccerFieldFill as SiSoccerFieldFill };
export default SoccerFieldFill;
export type { SoccerFieldFillProps };
