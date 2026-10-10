import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PepperFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PepperFillDuotone = memo(
  forwardRef<SVGSVGElement, PepperFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.65 9.68c.65.62 1.54 1.22 2.5 1.75 1.09.6 2.23 1.13 3.23 1.35h.04a21.5 21.5 0 0 1-8.7 6.73 5.4 5.4 0 0 1-2.95.42c-.34-.08-.51-.2-.6-.28a.5.5 0 0 1-.15-.27 1 1 0 0 1 .13-.65c.75-.99 1.47-1.83 2.18-2.65 1.6-1.87 3.09-3.6 4.32-6.4" opacity={.4} />
        <path fillRule="evenodd" d="M17.18 1.42a1 1 0 0 1 1.4-.23q.93.65 1.26 1.53c.22.6.17 1.19-.01 1.67q-.2.53-.53.92a5.1 5.1 0 0 1 1.53 5.1q-.15.65-.44 1.28c-1.16 2.6-3.83 5.36-6.64 7.34-1.42 1-2.92 1.83-4.34 2.36a7.6 7.6 0 0 1-3.86.54l-.23-.05c-1.28-.3-2.04-1.09-2.26-2.06-.19-.87.08-1.75.5-2.3q1.2-1.54 2.25-2.74c1.92-2.24 3.47-4.05 4.71-7.71l.05-.12v-.01l.02-.04.06-.1q.06-.15.19-.36c.13-.24.36-.63.6-.89a5.7 5.7 0 0 1 6.14-1.31q.25-.26.37-.54a.4.4 0 0 0 .01-.3c-.03-.1-.15-.3-.54-.59a1 1 0 0 1-.24-1.39m-5.53 8.26c-1.23 2.8-2.71 4.53-4.32 6.4-.7.82-1.43 1.66-2.18 2.65a1 1 0 0 0-.13.65q.02.16.15.27c.09.09.26.2.6.28q1.06.25 2.95-.42a21.53 21.53 0 0 0 8.7-6.72h-.04c-1-.22-2.14-.77-3.23-1.36a12 12 0 0 1-2.5-1.75m5.62-3.38a3.7 3.7 0 0 0-4.38.64l-.03.04-.09.12-.19.32-.08.15c.05.11.18.33.51.65q.73.7 2.1 1.45c1.07.59 2 1 2.7 1.16.57.12.73.02.79-.04q.2-.46.3-.87v-.01a3.2 3.2 0 0 0-1.63-3.61" clipRule="evenodd" />
    </IconBase>
  ))
);

PepperFillDuotone.displayName = 'PepperFillDuotone';

// Triple export pattern
export { PepperFillDuotone, PepperFillDuotone as PepperFillDuotoneIcon, PepperFillDuotone as SiPepperFillDuotone };
export default PepperFillDuotone;
export type { PepperFillDuotoneProps };
