import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardBoldProps = Omit<IconBaseProps, 'children'>;

const BiohazardBold = memo(
  forwardRef<SVGSVGElement, BiohazardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.63 2.5c.28-.48.9-.64 1.37-.37 1.8 1.04 3 2.98 3 5.2q-.01 1.45-.63 2.68 1.37.07 2.63.8c1.92 1.1 3 3.12 3 5.19 0 .55-.45 1-1 1s-1-.45-1-1c0-1.38-.72-2.73-2-3.46q-.51-.3-1.07-.43.07.45.07.89c0 2.6-1.67 4.83-4 5.65q.43.49 1 .81c1.28.74 2.8.7 4 0 .48-.27 1.09-.1 1.37.37.27.48.1 1.1-.37 1.37-1.8 1.03-4.08 1.1-6 0q-1.25-.74-2-1.88-.75 1.14-2 1.88c-1.92 1.1-4.2 1.03-6 0-.48-.28-.64-.89-.37-1.37.28-.48.9-.64 1.37-.37 1.2.7 2.72.74 4 0q.57-.34 1-.8C7.66 17.82 6 15.6 6 13q0-.45.07-.89-.56.13-1.07.43c-1.28.73-2 2.08-2 3.46 0 .55-.45 1-1 1s-1-.45-1-1c0-2.07 1.08-4.09 3-5.2q1.26-.72 2.63-.79Q6.01 8.79 6 7.33c0-2.22 1.2-4.16 3-5.2.48-.27 1.09-.1 1.37.37.27.48.1 1.09-.37 1.37-1.2.69-2 1.98-2 3.46q0 .56.15 1.07C9.19 7.53 10.53 7 12 7s2.81.53 3.85 1.4Q16 7.9 16 7.33c0-1.48-.8-2.77-2-3.46-.48-.28-.64-.9-.37-1.37M8.1 12.15Q8 12.56 8 13c0 1.83 1.23 3.37 2.9 3.85q.1-.39.1-.79v-.13l-.01-.25q-.07-.87-.53-1.68c-.54-.94-1.4-1.57-2.37-1.85m7.82 0c-.97.28-1.83.91-2.37 1.85q-.53.93-.54 1.93v.13l.01.25q.03.27.08.54C14.77 16.37 16 14.83 16 13q0-.44-.1-.85M12 9c-1.1 0-2.1.44-2.82 1.17.72.72 1.72 1.16 2.82 1.16q1.1-.02 2-.53.46-.28.82-.63C14.1 9.45 13.1 9 12 9" clipRule="evenodd" />
    </IconBase>
  ))
);

BiohazardBold.displayName = 'BiohazardBold';

// Triple export pattern
export { BiohazardBold, BiohazardBold as BiohazardBoldIcon, BiohazardBold as SiBiohazardBold };
export default BiohazardBold;
export type { BiohazardBoldProps };
