import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusFillProps = Omit<IconBaseProps, 'children'>;

const LotusFill = memo(
  forwardRef<SVGSVGElement, LotusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.45 3.32c.34-.28.85-.26 1.17.06l2.34 2.34q.26.27.5.55l2.89-1.54c.24-.13.53-.14.78-.02.25.11.43.34.49.6l.8 3.82H22q.36 0 .62.25.24.26.25.62v2c0 4.9-3.97 8.88-8.87 8.88h-4c-4.9 0-8.87-3.98-8.87-8.88v-2q0-.36.25-.62.26-.25.62-.25h1.58l.8-3.81.03-.1q.12-.35.46-.51c.25-.12.54-.11.78.02l2.89 1.54q.23-.28.5-.55l2.34-2.34zm8.28 7.56h-.01q-1.15.05-2.19.43v.05c.14 1.85-.3 3.73-1.32 5.35l-.02.04-.26.37v.02l-.3.37q0 .03-.02.04-.3.38-.65.73l-.85.84c3.89-.06 7.01-3.22 7.02-7.12v-1.12h-1.4M2.88 12c0 3.9 3.12 7.06 7 7.12l-.84-.84-.02-.02-.3-.32-.04-.04-.27-.33-.06-.07q-.13-.16-.25-.33l-.04-.06-.25-.36-.02-.04c-1.03-1.63-1.47-3.53-1.32-5.4q-1.04-.38-2.18-.43H2.88zm7.4-5.04q-.45.45-.79.92v.01q-.42.6-.71 1.27-.36.84-.5 1.74c-.3 1.9.17 3.9 1.42 5.48q.26.34.56.65h.01L12 18.77l1.72-1.72q.63-.64 1.07-1.36.22-.37.4-.75l.15-.38q.22-.6.34-1.2l.07-.4.06-.82v-.42l-.03-.4-.05-.42q-.26-1.6-1.22-3-.35-.48-.79-.93L12 5.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusFill.displayName = 'LotusFill';

// Triple export pattern
export { LotusFill, LotusFill as LotusFillIcon, LotusFill as SiLotusFill };
export default LotusFill;
export type { LotusFillProps };
