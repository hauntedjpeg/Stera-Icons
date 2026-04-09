import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusFillProps = Omit<IconBaseProps, 'children'>;

const LotusFill = memo(
  forwardRef<SVGSVGElement, LotusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lotus-fill" {...props}>
      <path fillRule="evenodd" d="M11.45 3.32a.9.9 0 0 1 1.17.06l2.34 2.34q.26.27.5.55l2.89-1.54a.88.88 0 0 1 1.27.59l.8 3.8H22a.9.9 0 0 1 .88.88v2c0 4.9-3.98 8.88-8.88 8.88h-4A8.87 8.87 0 0 1 1.13 12v-2A.9.9 0 0 1 2 9.13h1.58l.8-3.81.03-.1a.88.88 0 0 1 1.24-.5l2.89 1.55q.23-.28.5-.55l2.34-2.34zm8.28 7.56h-.01a7 7 0 0 0-2.19.43v.05a9 9 0 0 1-1.32 5.35l-.02.04-.26.37v.02l-.3.37q0 .03-.02.04-.3.38-.65.73l-.85.84A7.1 7.1 0 0 0 21.13 12v-1.12h-1.4M2.88 12c0 3.9 3.12 7.06 7 7.12l-.84-.84-.02-.02-.3-.32-.04-.04-.27-.33-.06-.07q-.13-.16-.25-.33l-.04-.06-.25-.36-.02-.04a9 9 0 0 1-1.32-5.4 7 7 0 0 0-2.18-.43H2.88zm7.4-5.04q-.45.45-.79.92v.01a7 7 0 0 0-1.22 3 7.1 7.1 0 0 0 2 6.14L12 18.77l1.72-1.72a7.1 7.1 0 0 0 2.06-5.74l-.05-.4a7 7 0 0 0-2-3.94L12 5.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusFill.displayName = 'LotusFill';

// Triple export pattern (lucide-react style)
export { LotusFill, LotusFill as LotusFillIcon, LotusFill as SiLotusFill };
export default LotusFill;
export type { LotusFillProps };
