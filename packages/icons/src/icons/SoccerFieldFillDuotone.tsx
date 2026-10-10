import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldFillDuotone = memo(
  forwardRef<SVGSVGElement, SoccerFieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 3.13v5.6c-1.44.4-2.5 1.7-2.5 3.27 0 1.56 1.06 2.87 2.5 3.26v5.62H4c-1.59 0-2.87-1.3-2.87-2.88v-2.12H5c.48 0 .88-.4.88-.88V9c0-.48-.4-.87-.88-.87H1.13V6C1.13 4.41 2.4 3.13 4 3.13z" opacity={0.4} />
        <path d="M1.13 9.88h3v4.24h-3zM22.88 14.13h-3V9.87h3zM12 10.38c.9 0 1.63.72 1.63 1.62s-.73 1.63-1.63 1.63-1.62-.73-1.62-1.63.72-1.62 1.62-1.62" opacity={0.4} />
        <path d="M20 3.13c1.59 0 2.88 1.28 2.88 2.87v2.13H19c-.48 0-.87.39-.87.87v6c0 .48.39.88.87.88h3.88V18c0 1.59-1.3 2.88-2.88 2.88h-7.12v-5.62c1.43-.39 2.5-1.7 2.5-3.26s-1.07-2.88-2.5-3.26V3.13z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.88 8.74c1.43.38 2.5 1.7 2.5 3.26s-1.07 2.87-2.5 3.26v5.62h-1.76v-5.62c-1.43-.39-2.5-1.7-2.5-3.26s1.07-2.88 2.5-3.26V3.13h1.76zM12 10.37c-.9 0-1.62.73-1.62 1.63s.72 1.63 1.62 1.63 1.63-.73 1.63-1.63-.73-1.62-1.63-1.62" clipRule="evenodd" />
        <path d="M5 8.13c.48 0 .88.39.88.87v6c0 .48-.4.88-.88.88H1.13v-1.76h3V9.89h-3V8.12zM22.88 9.88h-3v4.24h3v1.76H19c-.48 0-.87-.4-.87-.88V9c0-.48.39-.87.87-.87h3.88z" />
    </IconBase>
  ))
);

SoccerFieldFillDuotone.displayName = 'SoccerFieldFillDuotone';

// Triple export pattern
export { SoccerFieldFillDuotone, SoccerFieldFillDuotone as SoccerFieldFillDuotoneIcon, SoccerFieldFillDuotone as SiSoccerFieldFillDuotone };
export default SoccerFieldFillDuotone;
export type { SoccerFieldFillDuotoneProps };
