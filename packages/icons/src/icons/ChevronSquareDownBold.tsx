import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareDownBold = memo(
  forwardRef<SVGSVGElement, ChevronSquareDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.3 9.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-4 4q-.28.3-.7.3t-.7-.3l-4-4c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l3.3 3.29z" />
        <path fillRule="evenodd" d="M12 3q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q2.98 14.05 3 12q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58Q9.95 2.98 12 3m0 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62C5 9.58 5 10.58 5 12s0 2.42.06 3.2c.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06s2.42 0 3.2-.06c.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2s0-2.42-.06-3.2c-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38C14.42 5 13.42 5 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronSquareDownBold.displayName = 'ChevronSquareDownBold';

// Triple export pattern
export { ChevronSquareDownBold, ChevronSquareDownBold as ChevronSquareDownBoldIcon, ChevronSquareDownBold as SiChevronSquareDownBold };
export default ChevronSquareDownBold;
export type { ChevronSquareDownBoldProps };
