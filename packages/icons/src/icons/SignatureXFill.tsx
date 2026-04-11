import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXFillProps = Omit<IconBaseProps, 'children'>;

const SignatureXFill = memo(
  forwardRef<SVGSVGElement, SignatureXFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10 2.75c.87 0 1.66.25 2.29.79.61.53.96 1.25 1.13 1.98.34 1.42.12 3.2-.33 4.95q-.36 1.36-.91 2.8l.27-.12c.7-.35 1.05-.58 1.34-.88.31-.31.62-.77 1.11-1.67a1.25 1.25 0 0 1 2.35.6c0 .68.07 1.64.26 2.4q.1.36.19.55l.19-.11q.47-.3 1.05-.89c.78-.77 1.53-1.75 1.96-2.55a1.25 1.25 0 1 1 2.2 1.19 15 15 0 0 1-2.4 3.13c-.46.47-.96.9-1.45 1.21-.46.3-1.08.62-1.75.62-.87 0-1.45-.54-1.77-1.01-.28-.4-.46-.88-.58-1.32-.47.38-1 .67-1.6.97q-1.26.62-2.5.44l-.47.92H22a1.25 1.25 0 1 1 0 2.5H9.1q-.56.83-1.13 1.54A1.25 1.25 0 0 1 6 19.25H2a1.25 1.25 0 1 1 0-2.5h5.71q.57-.96 1.09-2l-.06-.06a8.6 8.6 0 0 1-2.33-4.28 9 9 0 0 1 0-4.81c.24-.74.63-1.45 1.24-1.99A3.5 3.5 0 0 1 10 2.75m0 2.5q-.48.01-.7.24-.28.22-.5.86c-.28.88-.28 2.17.04 3.47.23.95.6 1.79 1.05 2.41a23 23 0 0 0 .77-2.39c.43-1.63.52-2.93.33-3.74-.1-.39-.23-.58-.34-.67-.09-.08-.27-.18-.65-.18" clipRule="evenodd" />
        <path d="M4.38 11.38a.88.88 0 0 1 1.24 1.24l-.88.88.88.88a.88.88 0 0 1-1.24 1.24l-.88-.88-.88.88a.88.88 0 0 1-1.24-1.24l.88-.88-.88-.88a.88.88 0 0 1 1.24-1.24l.88.88z" />
    </IconBase>
  ))
);

SignatureXFill.displayName = 'SignatureXFill';

// Triple export pattern (lucide-react style)
export { SignatureXFill, SignatureXFill as SignatureXFillIcon, SignatureXFill as SiSignatureXFill };
export default SignatureXFill;
export type { SignatureXFillProps };
