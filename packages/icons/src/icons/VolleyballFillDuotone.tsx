import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballFillDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="volleyball-fill-duotone" {...props}>
      <path d="M7.07 11.97c1.01.12 2.29.47 3.9 1.15l.08.57.08.65.02-.02c.2.98.54 2.2 1.17 3.31a7 7 0 0 0 1.95 2.17 8 8 0 0 1-2.63.32 11.9 11.9 0 0 1-4.57-8.15M5.3 12a14 14 0 0 0 2.92 7.2 8.1 8.1 0 0 1-4.32-6.55c.36-.3.8-.54 1.4-.66M20.08 11.13q.05.42.05.87c0 2.9-1.53 5.45-3.82 6.89a4 4 0 0 1-1.98-1.4c3-1.85 4.85-4.07 5.75-6.36M17.4 5.93A8 8 0 0 1 19 7.87c-.09 2.64-1.58 5.65-5.55 8.1a11 11 0 0 1-.74-3.1q1.11-1.05 2.07-2.14.65-.75 1.17-1.5a8 8 0 0 0 1.45-3.3M4.82 8.19a6.7 6.7 0 0 1 5.57-1c1.49.33 2.8 1.02 3.66 1.67q-1.03 1.3-2.43 2.63c-2.29-.96-4.1-1.36-5.55-1.33q-1.2.03-2.07.4.23-1.27.82-2.37M12 3.88c1.3 0 2.54.3 3.63.85q.26 1.1-.6 2.68a12 12 0 0 0-4.26-1.93 9 9 0 0 0-3.4-.16A8 8 0 0 1 12 3.87" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13a9.8 9.8 0 0 1 8.64 5.09A9.87 9.87 0 1 1 12 2.12m-4.93 9.84a11.9 11.9 0 0 0 4.57 8.15 8 8 0 0 0 2.63-.32 7 7 0 0 1-1.95-2.17 11 11 0 0 1-1.17-3.31l-.02.02-.08-.65-.07-.57a15 15 0 0 0-3.91-1.15m-1.76.02q-.89.2-1.4.66a8.1 8.1 0 0 0 4.3 6.54 14 14 0 0 1-2.9-7.2m14.77-.86c-.9 2.29-2.75 4.5-5.75 6.35a4 4 0 0 0 1.98 1.4 8.1 8.1 0 0 0 3.77-7.75m-2.68-5.2a8 8 0 0 1-1.45 3.3q-.52.75-1.17 1.5-.96 1.1-2.07 2.14c.08.74.26 1.94.74 3.1 3.97-2.45 5.46-5.46 5.55-8.1a8 8 0 0 0-1.6-1.94m-7.01 1.26c-1.81-.4-3.8-.27-5.57 1A8 8 0 0 0 4 10.57q.9-.39 2.07-.4c1.46-.04 3.26.36 5.55 1.32q1.4-1.32 2.43-2.63a10 10 0 0 0-3.66-1.67M12 3.87c-1.72 0-3.32.54-4.63 1.45a9 9 0 0 1 3.4.16c1.68.38 3.2 1.14 4.26 1.93q.86-1.57.6-2.68A8 8 0 0 0 12 3.87" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballFillDuotone.displayName = 'VolleyballFillDuotone';

// Triple export pattern (lucide-react style)
export { VolleyballFillDuotone, VolleyballFillDuotone as VolleyballFillDuotoneIcon, VolleyballFillDuotone as SiVolleyballFillDuotone };
export default VolleyballFillDuotone;
export type { VolleyballFillDuotoneProps };
