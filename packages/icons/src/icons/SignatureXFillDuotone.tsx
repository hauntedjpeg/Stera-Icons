import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureXFillDuotone = memo(
  forwardRef<SVGSVGElement, SignatureXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.71 16.75q-.82 1.4-1.68 2.46l-.03.04H2c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM22 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.1q.77-1.17 1.48-2.5zM4.38 11.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-.88.88.88.88c.34.34.34.9 0 1.24s-.9.34-1.24 0l-.88-.88-.88.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l.88-.88-.88-.88c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l.88.88z" opacity={0.4} />
        <path fillRule="evenodd" d="M10 2.75q1.32-.01 2.29.79c.61.53.96 1.25 1.13 1.98.34 1.42.12 3.2-.33 4.95q-.37 1.36-.91 2.8l.27-.12c.7-.35 1.05-.58 1.35-.88s.61-.77 1.1-1.67c.27-.5.85-.76 1.4-.62.56.14.95.64.95 1.21 0 .69.07 1.65.26 2.4q.1.37.19.56l.19-.11q.46-.3 1.05-.89c.78-.77 1.53-1.75 1.96-2.55.33-.61 1.09-.84 1.7-.5.6.32.83 1.08.5 1.69-.57 1.04-1.47 2.22-2.4 3.13-.46.47-.96.9-1.45 1.21-.46.3-1.08.62-1.75.62-.87 0-1.45-.54-1.77-1.01-.28-.4-.46-.88-.58-1.32-.47.38-1 .67-1.6.97q-1.26.62-2.5.44c-.92 1.87-2 3.62-3.08 4.96-.44.53-1.22.61-1.76.18-.53-.44-.61-1.22-.18-1.76.96-1.18 1.94-2.77 2.77-4.47l-.06-.05c-1.17-1.06-1.94-2.68-2.33-4.28-.39-1.59-.45-3.36 0-4.81.24-.74.63-1.45 1.24-1.99q.96-.85 2.35-.86m0 2.5q-.48.01-.7.24-.28.22-.5.86c-.28.88-.28 2.17.04 3.47.23.95.6 1.79 1.05 2.41q.47-1.23.78-2.39c.42-1.63.51-2.93.32-3.74-.1-.39-.23-.58-.34-.67-.09-.08-.27-.18-.65-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureXFillDuotone.displayName = 'SignatureXFillDuotone';

// Triple export pattern
export { SignatureXFillDuotone, SignatureXFillDuotone as SignatureXFillDuotoneIcon, SignatureXFillDuotone as SiSignatureXFillDuotone };
export default SignatureXFillDuotone;
export type { SignatureXFillDuotoneProps };
