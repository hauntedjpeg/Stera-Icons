import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleFillProps = Omit<IconBaseProps, 'children'>;

const BubbleFill = memo(
  forwardRef<SVGSVGElement, BubbleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-.24 3.13c-.31-.23-.7-.3-1.08-.2l-.4.1c-2.47.71-4.3 2.85-4.69 5.21l-.05.4q-.02.36.2.68.25.3.61.37.37.05.69-.16t.42-.57l.08-.27c.5-1.56 1.92-2.69 3.38-2.86l.25-.02c.38-.04.73-.23.95-.54.23-.32.31-.73.24-1.14s-.28-.78-.6-1" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleFill.displayName = 'BubbleFill';

// Triple export pattern
export { BubbleFill, BubbleFill as BubbleFillIcon, BubbleFill as SiBubbleFill };
export default BubbleFill;
export type { BubbleFillProps };
