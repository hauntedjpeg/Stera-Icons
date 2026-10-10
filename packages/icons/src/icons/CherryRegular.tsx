import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryRegularProps = Omit<IconBaseProps, 'children'>;

const CherryRegular = memo(
  forwardRef<SVGSVGElement, CherryRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.7 20.18q-1.25.56-2.7.57a6.75 6.75 0 0 1 0-13.5h.04c.46-1 1.15-1.97 2.16-2.82 2.25-1.91 5.96-3.18 11.8-3.18h.07l.11.02.15.06.05.03a.73.73 0 0 1 .32.89l-.1.2a.8.8 0 0 1-.53.3c-1.91.21-3.73 1.74-4.85 3.8-.47.87-.8 1.8-.95 2.7a6.75 6.75 0 1 1-5.57 10.93m5.49-9.43q.06 1.05.48 1.91a.75.75 0 0 1-1.34.68 6 6 0 0 1-.64-2.43 5.25 5.25 0 1 0 1.5-.16M7.5 8.77A5.25 5.25 0 1 0 9.9 18.9v.01a6.7 6.7 0 0 1 2.19-8.4l-.11.08a5.3 5.3 0 0 0-2.94-1.73q-.3 1.09-.29 2.15a.75.75 0 0 1-1.5 0q0-1.09.26-2.23m10.69-5.8c-3.41.42-5.62 1.4-7.03 2.6a7 7 0 0 0-1.55 1.88 6.8 6.8 0 0 1 3.67 2.37q.7-.3 1.45-.45c.16-1.23.57-2.45 1.16-3.54a10 10 0 0 1 2.3-2.86" clipRule="evenodd" />
    </IconBase>
  ))
);

CherryRegular.displayName = 'CherryRegular';

// Triple export pattern
export { CherryRegular, CherryRegular as CherryRegularIcon, CherryRegular as SiCherryRegular };
export default CherryRegular;
export type { CherryRegularProps };
