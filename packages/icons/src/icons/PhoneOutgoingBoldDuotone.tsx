import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneOutgoingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneOutgoingBoldDuotone = memo(
  forwardRef<SVGSVGElement, PhoneOutgoingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.7 2.02c.48.08.84.34 1.1.68l.1.15.02.03.02.03 1.52 2.76q.46.81.65 1.42c.13.41.2.86.05 1.3-.14.44-.43.73-.62.9-.25.24-.35.3-.57.52-.06.06-.07.09-.05.2q.04.25.4.8c.52.72 1.3 1.41 1.88 2 .58.58 1.27 1.35 2 1.87q.53.37.8.4c.1.02.13 0 .19-.05.22-.22.28-.32.51-.57.18-.2.47-.48.9-.62.46-.14.9-.08 1.31.05q.6.19 1.42.65l2.76 1.52.03.02.04.02c.4.26.73.66.82 1.2.08.49-.08.92-.25 1.23-.3.57-.88 1.14-1.27 1.52q-1.9 1.91-4.32 1.95c-1.56.02-3.15-.57-4.7-1.57q-2.41-1.56-4.34-3.55c-1.3-1.29-2.5-2.7-3.53-4.32-1-1.55-1.6-3.13-1.57-4.7q.04-2.4 1.95-4.32c.38-.39.95-.96 1.53-1.27.3-.17.73-.33 1.23-.25M6.32 4.1q-.14.09-.34.27-.3.26-.6.58C4.42 5.9 4.02 6.88 4 7.9c-.01 1.04.38 2.24 1.25 3.59Q6.5 13.42 8.07 15l.45.46.01.01c1.2 1.22 2.5 2.32 4 3.27q2.02 1.3 3.58 1.25c1.01-.02 1.99-.42 2.94-1.37q.32-.3.58-.6.17-.2.27-.34l-2.54-1.4c-.52-.29-.84-.43-1.05-.5l-.1-.02-.04.05c-.07.08-.34.4-.57.63-.57.57-1.28.72-1.95.6-.6-.1-1.16-.42-1.62-.74-.9-.65-1.78-1.62-2.25-2.09s-1.44-1.35-2.08-2.25c-.33-.46-.65-1.02-.75-1.62-.12-.67.03-1.38.6-1.95.23-.23.55-.5.63-.57l.05-.05-.02-.1c-.07-.2-.21-.52-.5-1.04z" clipRule="evenodd" />
        <path d="M20 3c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-4.8 4.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L17.58 5H14c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
    </IconBase>
  ))
);

PhoneOutgoingBoldDuotone.displayName = 'PhoneOutgoingBoldDuotone';

// Triple export pattern
export { PhoneOutgoingBoldDuotone, PhoneOutgoingBoldDuotone as PhoneOutgoingBoldDuotoneIcon, PhoneOutgoingBoldDuotone as SiPhoneOutgoingBoldDuotone };
export default PhoneOutgoingBoldDuotone;
export type { PhoneOutgoingBoldDuotoneProps };
