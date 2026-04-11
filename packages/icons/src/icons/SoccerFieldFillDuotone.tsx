import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldFillDuotone = memo(
  forwardRef<SVGSVGElement, SoccerFieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 3.13v5.6a3.38 3.38 0 0 0 0 6.53v5.62H4A2.9 2.9 0 0 1 1.13 18v-2.12H5c.48 0 .88-.4.88-.88V9c0-.48-.4-.87-.88-.87H1.13V6A2.87 2.87 0 0 1 4 3.13z" opacity={0.4} />
        <path d="M1.13 9.88h3v4.24h-3zM22.88 14.13h-3V9.87h3zM12 10.38a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.24" opacity={0.4} />
        <path d="M20 3.13A2.9 2.9 0 0 1 22.88 6v2.13H19c-.48 0-.87.39-.87.87v6c0 .48.39.88.87.88h3.88V18A2.9 2.9 0 0 1 20 20.88h-7.12v-5.62a3.38 3.38 0 0 0 0-6.52V3.13z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.88 8.74a3.38 3.38 0 0 1 0 6.52v5.62h-1.76v-5.62a3.38 3.38 0 0 1 0-6.52V3.13h1.76zM12 10.37a1.62 1.62 0 1 0 0 3.25 1.62 1.62 0 0 0 0-3.24" clipRule="evenodd" />
        <path d="M5 8.13c.48 0 .88.39.88.87v6c0 .48-.4.88-.88.88H1.13v-1.76h3V9.89h-3V8.12zM22.88 9.88h-3v4.24h3v1.76H19a.9.9 0 0 1-.87-.88V9c0-.48.39-.87.87-.87h3.88z" />
    </IconBase>
  ))
);

SoccerFieldFillDuotone.displayName = 'SoccerFieldFillDuotone';

// Triple export pattern (lucide-react style)
export { SoccerFieldFillDuotone, SoccerFieldFillDuotone as SoccerFieldFillDuotoneIcon, SoccerFieldFillDuotone as SiSoccerFieldFillDuotone };
export default SoccerFieldFillDuotone;
export type { SoccerFieldFillDuotoneProps };
