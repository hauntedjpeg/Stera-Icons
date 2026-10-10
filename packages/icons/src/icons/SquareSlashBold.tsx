import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareSlashBoldProps = Omit<IconBaseProps, 'children'>;

const SquareSlashBold = memo(
  forwardRef<SVGSVGElement, SquareSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35q-.45.86-1.1 1.52-.68.68-1.53 1.1c-.7.36-1.46.52-2.35.59q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35q.45-.86 1.1-1.52.68-.67 1.53-1.1c.7-.36 1.46-.52 2.35-.59q1.32-.09 3.37-.07zM4.94 6.68c-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38q.1-.04.2-.12L5.06 6.47zM11.5 4.5c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38l-.21.12 12.47 12.47.12-.21c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-1c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquareSlashBold.displayName = 'SquareSlashBold';

// Triple export pattern
export { SquareSlashBold, SquareSlashBold as SquareSlashBoldIcon, SquareSlashBold as SiSquareSlashBold };
export default SquareSlashBold;
export type { SquareSlashBoldProps };
