import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletHalfFillProps = Omit<IconBaseProps, 'children'>;

const DropletHalfFill = memo(
  forwardRef<SVGSVGElement, DropletHalfFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a1 1 0 0 1 .29.04q.15.06.26.15h.01l.02.02.06.06a18 18 0 0 1 1.05.93c.67.63 1.57 1.52 2.47 2.58.9 1.05 1.82 2.28 2.52 3.58.69 1.3 1.2 2.72 1.2 4.15 0 4.5-3.49 8.24-7.88 8.24s-7.87-3.74-7.87-8.24c0-1.43.5-2.85 1.2-4.15.69-1.3 1.6-2.53 2.5-3.58a33 33 0 0 1 3.53-3.51l.06-.06.02-.01a.87.87 0 0 1 .56-.2m0 18c3.34 0 6.12-2.87 6.13-6.5 0-1.02-.38-2.15-1-3.31a19 19 0 0 0-2.3-3.27c-.84-1-1.7-1.84-2.33-2.44l-.5-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletHalfFill.displayName = 'DropletHalfFill';

// Triple export pattern (lucide-react style)
export { DropletHalfFill, DropletHalfFill as DropletHalfFillIcon, DropletHalfFill as SiDropletHalfFill };
export default DropletHalfFill;
export type { DropletHalfFillProps };
