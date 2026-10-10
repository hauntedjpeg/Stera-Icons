import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballRegularProps = Omit<IconBaseProps, 'children'>;

const VolleyballRegular = memo(
  forwardRef<SVGSVGElement, VolleyballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c1.71 0 3.32.44 4.72 1.22 1.6.89 2.92 2.2 3.81 3.8.78 1.4 1.22 3.02 1.22 4.73 0 3.64-2 6.81-4.95 8.49-1.42.8-3.06 1.26-4.8 1.26q-.37 0-.75-.03c-4.93-.37-8.83-4.41-9-9.4V12c0-1.73.45-3.36 1.25-4.77C5.17 4.26 8.35 2.25 12 2.25m-5.08 9.57c.52 4.08 2.37 6.6 4.67 8.42l.41.01q1.35 0 2.56-.4c-.95-.6-1.63-1.41-2.13-2.28-.68-1.18-1.02-2.49-1.2-3.5v.01l-.06-.41-.08-.64c-1.74-.73-3.1-1.1-4.17-1.2m-1.5.03c-.72.11-1.24.39-1.65.75.23 3.12 2.18 5.76 4.92 6.96-1.65-1.89-2.88-4.35-3.27-7.71m14.71-1.24c-.82 2.46-2.72 4.87-5.99 6.84.54.7 1.24 1.27 2.19 1.58 2.35-1.46 3.92-4.06 3.92-7.03q0-.7-.12-1.4M17.3 5.68c-.11 1.18-.69 2.37-1.45 3.47l-.36.5c-.81 1.08-1.83 2.15-2.91 3.17.08.77.27 2.08.81 3.33 4.11-2.49 5.66-5.58 5.73-8.32Q18.4 6.6 17.3 5.68M10.4 7.06c-1.84-.4-3.87-.27-5.68 1.04q-.67 1.23-.89 2.68.93-.46 2.23-.5c1.45-.02 3.26.38 5.57 1.36q1.45-1.36 2.5-2.7l.08-.1c-.87-.68-2.24-1.43-3.8-1.78M12 3.75c-1.94 0-3.72.67-5.13 1.79 1.33-.28 2.66-.21 3.87.06 1.73.39 3.27 1.19 4.32 2q1-1.72.68-2.96c-1.12-.57-2.4-.89-3.74-.89" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballRegular.displayName = 'VolleyballRegular';

// Triple export pattern
export { VolleyballRegular, VolleyballRegular as VolleyballRegularIcon, VolleyballRegular as SiVolleyballRegular };
export default VolleyballRegular;
export type { VolleyballRegularProps };
