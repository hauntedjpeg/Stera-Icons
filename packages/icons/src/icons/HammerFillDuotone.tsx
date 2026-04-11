import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HammerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HammerFillDuotone = memo(
  forwardRef<SVGSVGElement, HammerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.12 9c0 .48.4.87.88.88h.84l-.36 8.66a1.52 1.52 0 1 0 3.04 0l-.36-8.66h1.34q.21 0 .4-.1l.37 8.69a3.27 3.27 0 1 1-6.54 0z" opacity={.4} />
        <path d="M14.5 2.13q.36 0 .62.25l1.05 1.05 1.44-.71q.18-.1.39-.1h2c.48 0 .87.4.87.88v5c0 .48-.39.88-.87.88h-2a1 1 0 0 1-.4-.1l-1.43-.72-1.05 1.06a1 1 0 0 1-.62.26H10A.9.9 0 0 1 9.12 9q.02-.25-.28-.48-.37-.27-1.13-.33a3.7 3.7 0 0 0-3.03 1.36.88.88 0 0 1-1.54-.72c1.07-5.36 4.4-6.7 5.86-6.7z" />
    </IconBase>
  ))
);

HammerFillDuotone.displayName = 'HammerFillDuotone';

// Triple export pattern (lucide-react style)
export { HammerFillDuotone, HammerFillDuotone as HammerFillDuotoneIcon, HammerFillDuotone as SiHammerFillDuotone };
export default HammerFillDuotone;
export type { HammerFillDuotoneProps };
