import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PepperFillProps = Omit<IconBaseProps, 'children'>;

const PepperFill = memo(
  forwardRef<SVGSVGElement, PepperFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.18 1.42c.33-.45.95-.55 1.4-.23q.93.65 1.26 1.53c.22.6.17 1.19-.01 1.67q-.2.53-.53.92c1.42 1.3 2.02 3.26 1.53 5.1q-.15.65-.44 1.28c-1.16 2.6-3.83 5.36-6.64 7.34-1.42 1-2.92 1.83-4.34 2.36-1.31.48-2.67.75-3.86.54l-.23-.05c-1.28-.3-2.04-1.09-2.26-2.06-.19-.87.08-1.75.5-2.3q1.2-1.54 2.25-2.74c1.92-2.24 3.47-4.05 4.71-7.71l.05-.12v-.01l.02-.04.06-.1q.06-.15.19-.36c.13-.24.36-.63.6-.89C13 3.94 15.46 3.4 17.59 4.24q.25-.26.37-.54.06-.17.01-.3c-.03-.1-.15-.3-.54-.59-.45-.32-.56-.94-.24-1.39m.09 4.88c-1.47-.8-3.3-.49-4.38.64l-.03.04-.09.12-.19.32-.08.15c.05.11.18.33.51.65q.73.7 2.1 1.45c1.07.59 2 1 2.7 1.16.57.12.73.02.79-.04q.2-.46.3-.87v-.01c.36-1.35-.24-2.85-1.63-3.61" clipRule="evenodd" />
    </IconBase>
  ))
);

PepperFill.displayName = 'PepperFill';

// Triple export pattern
export { PepperFill, PepperFill as PepperFillIcon, PepperFill as SiPepperFill };
export default PepperFill;
export type { PepperFillProps };
