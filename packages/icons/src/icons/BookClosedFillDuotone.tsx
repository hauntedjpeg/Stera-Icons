import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, BookClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m17 2.13.9.01q.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89v11.5c0 .48-.4.88-.88.88-.34 0-.92.42-.92 1.37s.58 1.38.92 1.38c.48 0 .88.39.88.87s-.4.88-.88.88H7.25c-1.73 0-3.12-1.4-3.12-3.13V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM7.25 17.38c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38h9.35q-.27-.67-.27-1.38t.27-1.37zM9 10.13c-.48 0-.87.39-.87.87s.39.88.87.88h4c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M13 10.13c.48 0 .88.39.88.87s-.4.88-.88.88H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15 6.63c.48 0 .88.39.88.87s-.4.88-.88.88H9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

BookClosedFillDuotone.displayName = 'BookClosedFillDuotone';

// Triple export pattern
export { BookClosedFillDuotone, BookClosedFillDuotone as BookClosedFillDuotoneIcon, BookClosedFillDuotone as SiBookClosedFillDuotone };
export default BookClosedFillDuotone;
export type { BookClosedFillDuotoneProps };
