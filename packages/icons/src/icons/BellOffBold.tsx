import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffBoldProps = Omit<IconBaseProps, 'children'>;

const BellOffBold = memo(
  forwardRef<SVGSVGElement, BellOffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l16 16c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-2.21-2.2h-.7c-.46 2-2.25 3.5-4.39 3.5s-3.93-1.5-4.39-3.5H5.74c-2.4 0-3.83-2.67-2.5-4.66l.92-1.38c.55-.82.84-1.79.84-2.78V9.3q.01-1.31.41-2.47L3.3 4.7c-.39-.4-.39-1.03 0-1.42M9.7 18.5c.39.88 1.27 1.5 2.29 1.5 1.03 0 1.9-.62 2.29-1.5zM7.06 8.48Q7 8.88 7 9.3v.38c0 1.39-.4 2.74-1.18 3.89l-.92 1.38c-.44.66.04 1.55.84 1.55h9.35z" clipRule="evenodd" />
        <path d="M12 2c3.91 0 7 3.31 7 7.3v.38c0 1 .3 1.96.84 2.78l.92 1.38c.5.74.6 1.6.42 2.36-.13.54-.67.87-1.2.74-.54-.13-.87-.68-.74-1.21q.1-.39-.14-.78l-.92-1.38C17.4 12.42 17 11.07 17 9.68V9.3C17 6.33 14.72 4 12 4c-1.1 0-2.1.37-2.93 1-.44.34-1.07.26-1.4-.17-.34-.44-.26-1.07.18-1.4C9 2.52 10.45 2 12 2" />
    </IconBase>
  ))
);

BellOffBold.displayName = 'BellOffBold';

// Triple export pattern
export { BellOffBold, BellOffBold as BellOffBoldIcon, BellOffBold as SiBellOffBold };
export default BellOffBold;
export type { BellOffBoldProps };
