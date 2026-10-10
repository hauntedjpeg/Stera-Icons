import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CherryRegularDuotone = memo(
  forwardRef<SVGSVGElement, CherryRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.04 7.25a8 8 0 0 0-.53 1.52A5.25 5.25 0 1 0 9.9 18.9v.01a6.7 6.7 0 0 1 2.19-8.4l-.11.08a5.3 5.3 0 0 0-2.94-1.73q.2-.7.58-1.4a6.8 6.8 0 0 1 3.67 2.37q.7-.3 1.45-.45a8 8 0 0 0-.05 1.54 5.25 5.25 0 1 0 1.5-.16q-.04-.72.08-1.5a6.75 6.75 0 1 1-5.57 10.93q-1.25.56-2.7.57a6.75 6.75 0 0 1 0-13.5z" />
        <path d="M22.02 1.25h.05l.11.02.15.06.05.03a.73.73 0 0 1 .32.89l-.1.2a.8.8 0 0 1-.53.3c-1.91.21-3.73 1.74-4.85 3.8s-1.4 4.41-.55 6.11a.75.75 0 0 1-1.34.68c-1.15-2.3-.68-5.2.57-7.51a10 10 0 0 1 2.3-2.86c-3.41.42-5.62 1.4-7.03 2.6A6.9 6.9 0 0 0 8.75 11a.75.75 0 0 1-1.5 0c0-2.16.68-4.64 2.95-6.57 2.25-1.91 5.96-3.18 11.8-3.18z" opacity={.4} />
    </IconBase>
  ))
);

CherryRegularDuotone.displayName = 'CherryRegularDuotone';

// Triple export pattern
export { CherryRegularDuotone, CherryRegularDuotone as CherryRegularDuotoneIcon, CherryRegularDuotone as SiCherryRegularDuotone };
export default CherryRegularDuotone;
export type { CherryRegularDuotoneProps };
