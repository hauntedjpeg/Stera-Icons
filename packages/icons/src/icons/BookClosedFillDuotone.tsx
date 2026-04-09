import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, BookClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-closed-fill-duotone" {...props}>
      <path fillRule="evenodd" d="m17 2.13.9.01q.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89v11.5c0 .48-.4.88-.88.88-.34 0-.92.42-.92 1.37s.58 1.38.92 1.38a.88.88 0 0 1 0 1.75H7.25a3.1 3.1 0 0 1-3.12-3.13V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM7.25 17.38a1.38 1.38 0 0 0 0 2.75h9.35a3.6 3.6 0 0 1 0-2.75zM9 10.13a.88.88 0 0 0 0 1.74h4a.87.87 0 1 0 0-1.74zm0-3.5a.88.88 0 0 0 0 1.75h6a.88.88 0 0 0 0-1.75z" clipRule="evenodd" opacity={.4} />
        <path d="M13 10.13a.88.88 0 0 1 0 1.74H9a.88.88 0 0 1 0-1.74zM15 6.63a.88.88 0 0 1 0 1.75H9a.87.87 0 1 1 0-1.76z" />
    </IconBase>
  ))
);

BookClosedFillDuotone.displayName = 'BookClosedFillDuotone';

// Triple export pattern (lucide-react style)
export { BookClosedFillDuotone, BookClosedFillDuotone as BookClosedFillDuotoneIcon, BookClosedFillDuotone as SiBookClosedFillDuotone };
export default BookClosedFillDuotone;
export type { BookClosedFillDuotoneProps };
