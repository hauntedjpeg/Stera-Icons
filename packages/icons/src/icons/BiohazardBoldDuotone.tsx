import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BiohazardBoldDuotone = memo(
  forwardRef<SVGSVGElement, BiohazardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4" clipRule="evenodd" opacity={.4} />
        <path d="M14 18.65q.43.49 1 .81c1.28.74 2.8.7 4 0 .48-.27 1.09-.1 1.37.37.27.48.1 1.1-.37 1.37-1.8 1.03-4.08 1.1-6 0q-1.25-.74-2-1.88-.75 1.14-2 1.88c-1.92 1.1-4.2 1.03-6 0-.48-.28-.64-.89-.37-1.37.28-.48.9-.64 1.37-.37 1.2.7 2.72.74 4 0q.57-.34 1-.8.94.34 2 .34t2-.35M14.82 10.17q.82.81 1.09 1.98c-.97.28-1.83.91-2.37 1.85q-.53.93-.54 1.93v.13l.01.25q.03.27.08.54-.52.15-1.09.15t-1.1-.15q.1-.39.1-.79v-.13l-.01-.25q-.07-.87-.53-1.68c-.54-.94-1.4-1.57-2.37-1.85q.27-1.17 1.09-1.98c.72.72 1.72 1.16 2.82 1.16q1.1-.02 2-.53.46-.28.82-.63M9 2.13c.48-.27 1.09-.1 1.37.37.27.48.1 1.09-.37 1.37-1.2.69-2 1.98-2 3.46q0 .56.15 1.07c-1.1.92-1.86 2.23-2.08 3.71q-.56.13-1.07.43c-1.28.73-2 2.08-2 3.46 0 .55-.45 1-1 1s-1-.45-1-1c0-2.07 1.08-4.09 3-5.2q1.26-.72 2.63-.79Q6.01 8.79 6 7.33c0-2.22 1.2-4.16 3-5.2M13.63 2.5c.28-.48.9-.64 1.37-.37 1.8 1.04 3 2.98 3 5.2q-.01 1.45-.63 2.68 1.37.07 2.63.8c1.92 1.1 3 3.12 3 5.19 0 .55-.45 1-1 1s-1-.45-1-1c0-1.38-.72-2.73-2-3.46q-.51-.3-1.07-.43c-.22-1.48-.98-2.79-2.08-3.7q.15-.52.15-1.08c0-1.48-.8-2.77-2-3.46-.48-.28-.64-.9-.37-1.37" />
    </IconBase>
  ))
);

BiohazardBoldDuotone.displayName = 'BiohazardBoldDuotone';

// Triple export pattern
export { BiohazardBoldDuotone, BiohazardBoldDuotone as BiohazardBoldDuotoneIcon, BiohazardBoldDuotone as SiBiohazardBoldDuotone };
export default BiohazardBoldDuotone;
export type { BiohazardBoldDuotoneProps };
