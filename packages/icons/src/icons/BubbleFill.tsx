import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleFillProps = Omit<IconBaseProps, 'children'>;

const BubbleFill = memo(
  forwardRef<SVGSVGElement, BubbleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.24 3.13a1.3 1.3 0 0 0-1.08-.2l-.4.1a6.6 6.6 0 0 0-4.74 5.6q-.02.38.2.69.25.3.61.37.37.05.69-.16t.42-.57l.08-.27a4.2 4.2 0 0 1 3.63-2.88c.38-.04.73-.23.95-.54.23-.32.31-.73.24-1.14a1.5 1.5 0 0 0-.6-1" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleFill.displayName = 'BubbleFill';

// Triple export pattern (lucide-react style)
export { BubbleFill, BubbleFill as BubbleFillIcon, BubbleFill as SiBubbleFill };
export default BubbleFill;
export type { BubbleFillProps };
