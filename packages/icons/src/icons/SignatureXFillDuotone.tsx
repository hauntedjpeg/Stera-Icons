import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureXFillDuotone = memo(
  forwardRef<SVGSVGElement, SignatureXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.71 16.75q-.82 1.4-1.68 2.46l-.03.04H2a1.25 1.25 0 0 1 0-2.5zM22 16.75a1.25 1.25 0 0 1 0 2.5H9.1a29 29 0 0 0 1.48-2.5zM4.38 11.38a.88.88 0 0 1 1.24 1.24l-.88.88.88.88a.88.88 0 0 1-1.24 1.24l-.88-.88-.88.88a.88.88 0 0 1-1.24-1.24l.88-.88-.88-.88a.88.88 0 0 1 1.24-1.24l.88.88z" opacity={0.4} />
        <path fillRule="evenodd" d="M10 2.75c.87 0 1.66.25 2.29.79.61.53.96 1.25 1.13 1.98.34 1.42.12 3.2-.33 4.95q-.37 1.36-.91 2.8l.27-.12c.7-.35 1.05-.58 1.35-.88s.61-.77 1.1-1.67a1.25 1.25 0 0 1 2.35.6c0 .68.07 1.64.26 2.4q.1.36.19.55l.19-.11q.46-.3 1.05-.89c.78-.77 1.53-1.75 1.96-2.55a1.25 1.25 0 1 1 2.2 1.19 15 15 0 0 1-2.4 3.13c-.46.47-.96.9-1.45 1.21-.46.3-1.08.62-1.75.62-.87 0-1.45-.54-1.77-1.01-.28-.4-.46-.88-.58-1.32-.47.38-1 .67-1.6.97q-1.26.62-2.5.44c-.92 1.87-2 3.62-3.08 4.96a1.25 1.25 0 0 1-1.94-1.58 24 24 0 0 0 2.77-4.47l-.06-.05a8.6 8.6 0 0 1-2.33-4.28 9 9 0 0 1 0-4.81c.24-.74.63-1.45 1.24-1.99A3.5 3.5 0 0 1 10 2.75m0 2.5q-.48.01-.7.24-.28.22-.5.86c-.28.88-.28 2.17.04 3.47.23.95.6 1.79 1.05 2.41a23 23 0 0 0 .78-2.39c.42-1.63.51-2.93.32-3.74-.1-.39-.23-.58-.34-.67-.09-.08-.27-.18-.65-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureXFillDuotone.displayName = 'SignatureXFillDuotone';

// Triple export pattern (lucide-react style)
export { SignatureXFillDuotone, SignatureXFillDuotone as SignatureXFillDuotoneIcon, SignatureXFillDuotone as SiSignatureXFillDuotone };
export default SignatureXFillDuotone;
export type { SignatureXFillDuotoneProps };
