import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, BubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.24 3.13a1.3 1.3 0 0 0-1.08-.2l-.4.1a6.6 6.6 0 0 0-4.74 5.6q-.02.38.2.69.25.3.61.37.37.05.69-.16t.42-.57l.08-.27a4.2 4.2 0 0 1 3.63-2.88c.38-.04.73-.23.95-.54.23-.32.31-.73.24-1.14a1.5 1.5 0 0 0-.6-1" clipRule="evenodd" opacity={.4} />
        <path d="M10.68 5.06c.38-.1.77-.03 1.08.2.32.22.53.59.6 1 .07.4-.01.82-.24 1.14s-.57.5-.95.54l-.25.02a4.2 4.2 0 0 0-3.46 3.13 1 1 0 0 1-.42.57q-.32.21-.69.16a1 1 0 0 1-.6-.37 1 1 0 0 1-.2-.69q0-.2.04-.39a6.6 6.6 0 0 1 5.1-5.3" />
    </IconBase>
  ))
);

BubbleFillDuotone.displayName = 'BubbleFillDuotone';

// Triple export pattern (lucide-react style)
export { BubbleFillDuotone, BubbleFillDuotone as BubbleFillDuotoneIcon, BubbleFillDuotone as SiBubbleFillDuotone };
export default BubbleFillDuotone;
export type { BubbleFillDuotoneProps };
