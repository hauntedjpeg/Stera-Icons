import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BiohazardBoldDuotone = memo(
  forwardRef<SVGSVGElement, BiohazardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" opacity={.4} />
        <path d="M14 18.65a4 4 0 0 0 5 .81 1 1 0 1 1 1 1.74 6 6 0 0 1-8-1.88 5.97 5.97 0 0 1-8 1.88 1 1 0 0 1 1-1.74 4 4 0 0 0 5-.8 6 6 0 0 0 4 0M14.82 10.17a4 4 0 0 1 1.09 1.98A4 4 0 0 0 13 16.06l.01.25q.03.27.08.54a4 4 0 0 1-2.18 0 4 4 0 0 0 .09-.92l-.01-.25a4 4 0 0 0-2.9-3.53 4 4 0 0 1 1.09-1.98 4 4 0 0 0 5.64 0M9 2.13a1 1 0 1 1 1 1.74A4 4 0 0 0 8.15 8.4a6 6 0 0 0-2.08 3.71A4 4 0 0 0 3 16a1 1 0 0 1-2 0A6 6 0 0 1 6.63 10 5.97 5.97 0 0 1 9 2.13M13.63 2.5A1 1 0 0 1 15 2.13a6 6 0 0 1 2.37 7.88A5.97 5.97 0 0 1 23 16a1 1 0 0 1-2 0 4 4 0 0 0-3.07-3.89 6 6 0 0 0-2.08-3.7A4 4 0 0 0 14 3.86a1 1 0 0 1-.37-1.37" />
    </IconBase>
  ))
);

BiohazardBoldDuotone.displayName = 'BiohazardBoldDuotone';

// Triple export pattern (lucide-react style)
export { BiohazardBoldDuotone, BiohazardBoldDuotone as BiohazardBoldDuotoneIcon, BiohazardBoldDuotone as SiBiohazardBoldDuotone };
export default BiohazardBoldDuotone;
export type { BiohazardBoldDuotoneProps };
