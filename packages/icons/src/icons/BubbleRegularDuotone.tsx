import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M10.74 5.4q.46-.11.83.15.38.28.47.76c.05.31-.02.63-.2.87q-.27.38-.73.43-.13 0-.26.03c-1.58.24-3.05 1.48-3.54 3.13l-.07.28q-.07.29-.32.45t-.54.13q-.28-.06-.47-.3-.17-.23-.15-.53l.06-.38C6.2 8.16 8 6.13 10.35 5.5z" />
    </IconBase>
  ))
);

BubbleRegularDuotone.displayName = 'BubbleRegularDuotone';

// Triple export pattern
export { BubbleRegularDuotone, BubbleRegularDuotone as BubbleRegularDuotoneIcon, BubbleRegularDuotone as SiBubbleRegularDuotone };
export default BubbleRegularDuotone;
export type { BubbleRegularDuotoneProps };
