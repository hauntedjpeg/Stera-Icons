import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellDotBoldProps = Omit<IconBaseProps, 'children'>;

const BellDotBold = memo(
  forwardRef<SVGSVGElement, BellDotBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.3 2c.55.03.98.5.96 1.05s-.5.98-1.05.95H12C9.28 4 7 6.33 7 9.3v.38c0 1.39-.4 2.74-1.18 3.89l-.92 1.38c-.44.66.04 1.55.84 1.55h12.52c.8 0 1.28-.89.83-1.55l-.91-1.38q-.5-.73-.78-1.55c-.18-.52.09-1.1.61-1.28s1.1.1 1.28.61q.2.59.55 1.1l.92 1.39c1.33 1.99-.1 4.66-2.5 4.66H16.4c-.46 2-2.25 3.5-4.39 3.5s-3.93-1.5-4.39-3.5H5.74c-2.4 0-3.83-2.67-2.5-4.66l.92-1.38c.55-.82.84-1.79.84-2.78V9.3C5 5.31 8.09 2 12 2zM9.71 18.5c.39.88 1.27 1.5 2.29 1.5 1.03 0 1.9-.62 2.29-1.5z" clipRule="evenodd" />
        <path d="M16.5 3C18.43 3 20 4.57 20 6.5S18.43 10 16.5 10 13 8.43 13 6.5 14.57 3 16.5 3" />
    </IconBase>
  ))
);

BellDotBold.displayName = 'BellDotBold';

// Triple export pattern
export { BellDotBold, BellDotBold as BellDotBoldIcon, BellDotBold as SiBellDotBold };
export default BellDotBold;
export type { BellDotBoldProps };
