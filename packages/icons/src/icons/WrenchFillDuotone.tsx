import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WrenchFillDuotone = memo(
  forwardRef<SVGSVGElement, WrenchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.78 5.48a5.5 5.5 0 0 1 4.35-1.58l-2.6 2.58a.9.9 0 0 0-.22.82l.71 3.03c.08.32.33.57.65.65l3.03.71c.3.07.6-.01.82-.23l2.58-2.59a5.46 5.46 0 0 1-7.35 5.6.9.9 0 0 0-.93.2L6.9 19.62a1.77 1.77 0 0 1-2.5-2.5l4.92-4.93c.24-.24.32-.6.2-.93a5.5 5.5 0 0 1 1.26-5.77" opacity={.4} />
        <path fillRule="evenodd" d="M9.55 4.24a7.2 7.2 0 0 1 6.72-1.93c1.14.26 1.32 1.6.63 2.29l-2.78 2.78.48 2.02 2.02.48L19.4 7.1l.14-.12c.71-.54 1.9-.32 2.15.75a7.22 7.22 0 0 1-9 8.56l-4.56 4.55a3.52 3.52 0 0 1-4.97-4.97l4.55-4.55a7.2 7.2 0 0 1 1.84-7.08m5.58-.34a5.46 5.46 0 0 0-5.6 7.35c.11.32.03.69-.2.93L4.38 17.1a1.77 1.77 0 1 0 2.5 2.5l4.93-4.93c.25-.24.6-.32.93-.2a5.47 5.47 0 0 0 7.35-5.6l-2.58 2.58a.9.9 0 0 1-.82.23l-3.03-.71a.9.9 0 0 1-.65-.65l-.71-3.03q-.1-.47.23-.82z" clipRule="evenodd" />
    </IconBase>
  ))
);

WrenchFillDuotone.displayName = 'WrenchFillDuotone';

// Triple export pattern (lucide-react style)
export { WrenchFillDuotone, WrenchFillDuotone as WrenchFillDuotoneIcon, WrenchFillDuotone as SiWrenchFillDuotone };
export default WrenchFillDuotone;
export type { WrenchFillDuotoneProps };
