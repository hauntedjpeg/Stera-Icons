import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneBoldDuotone = memo(
  forwardRef<SVGSVGElement, PhoneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.46 5.67q.46.81.66 1.42c.12.41.18.86.04 1.3s-.43.73-.62.9c-.25.24-.35.3-.57.53-.06.05-.07.08-.05.19q.03.26.4.8c.52.72 1.29 1.41 1.87 2 .59.58 1.28 1.35 2 1.87q.55.37.8.4c.11.02.14 0 .2-.05.22-.22.28-.32.51-.57.18-.2.47-.48.9-.62.45-.14.9-.08 1.31.05q.6.19 1.42.65l-.49.88-.48.87c-.52-.29-.84-.43-1.05-.5l-.1-.02q0 .02-.04.05c-.07.08-.34.4-.57.63-.57.57-1.28.72-1.95.6-.6-.1-1.16-.42-1.62-.74-.9-.65-1.78-1.62-2.25-2.09s-1.44-1.35-2.09-2.25c-.32-.46-.64-1.01-.74-1.62-.12-.67.03-1.38.6-1.95.23-.23.55-.5.63-.57l.05-.05-.02-.1c-.07-.2-.21-.52-.5-1.04z" opacity={.4} />
        <path d="M6.7 2.02c.48.08.84.34 1.1.68l.1.15.02.03.02.03 1.52 2.76-1.75.97-1.4-2.54q-.14.09-.34.27-.3.26-.6.58C4.42 5.9 4.02 6.88 4 7.9c-.01 1.04.38 2.24 1.25 3.59Q6.5 13.42 8.07 15l.45.46.01.01c1.2 1.22 2.5 2.32 4 3.27q2.02 1.3 3.58 1.25c1.01-.02 1.99-.42 2.94-1.37q.32-.3.58-.6.17-.2.27-.34l-2.54-1.4.97-1.75 2.76 1.52.03.02.04.02c.4.26.73.66.82 1.2.08.49-.08.92-.25 1.23-.3.57-.88 1.14-1.27 1.52q-1.9 1.91-4.32 1.95c-1.56.02-3.15-.57-4.7-1.57q-2.41-1.56-4.34-3.55c-1.3-1.29-2.5-2.7-3.53-4.32-1-1.55-1.6-3.13-1.57-4.7q.04-2.4 1.95-4.32c.38-.39.95-.96 1.53-1.27.3-.17.73-.33 1.23-.25" />
    </IconBase>
  ))
);

PhoneBoldDuotone.displayName = 'PhoneBoldDuotone';

// Triple export pattern
export { PhoneBoldDuotone, PhoneBoldDuotone as PhoneBoldDuotoneIcon, PhoneBoldDuotone as SiPhoneBoldDuotone };
export default PhoneBoldDuotone;
export type { PhoneBoldDuotoneProps };
