import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneIncomingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneIncomingFillDuotone = memo(
  forwardRef<SVGSVGElement, PhoneIncomingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.88 2.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-5 5H20c.48 0 .87.4.88.88 0 .48-.4.87-.88.87h-6c-.48 0-.87-.39-.87-.87V4c0-.48.39-.88.87-.88s.87.4.88.88v3.89z" opacity={.4} />
        <path d="M6.63 2.51q.47.08.77.5l.08.1.01.02.01.02L9.02 5.9q.45.8.62 1.33.18.54.04 1c-.1.31-.3.52-.48.69-.2.2-.36.3-.58.53q-.27.26-.2.63.08.42.5 1c.55.77 1.37 1.51 1.92 2.07.56.55 1.3 1.37 2.07 1.92q.58.42 1 .5.37.07.63-.2c.23-.22.34-.37.53-.58.17-.18.38-.38.69-.48q.46-.14 1 .04.53.17 1.33.62l2.76 1.52h.02l.01.02c.32.2.55.49.6.85.06.34-.05.66-.19.92-.27.5-.78 1-1.18 1.4q-1.8 1.8-3.98 1.8c-1.43.03-2.92-.51-4.42-1.48q-2.37-1.54-4.25-3.48Q5.52 14.65 4 12.3c-.97-1.5-1.51-2.99-1.49-4.42q.03-2.2 1.8-3.98c.4-.4.91-.91 1.41-1.18.26-.14.58-.25.92-.2" />
    </IconBase>
  ))
);

PhoneIncomingFillDuotone.displayName = 'PhoneIncomingFillDuotone';

// Triple export pattern
export { PhoneIncomingFillDuotone, PhoneIncomingFillDuotone as PhoneIncomingFillDuotoneIcon, PhoneIncomingFillDuotone as SiPhoneIncomingFillDuotone };
export default PhoneIncomingFillDuotone;
export type { PhoneIncomingFillDuotoneProps };
