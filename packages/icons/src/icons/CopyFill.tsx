import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CopyFillProps = Omit<IconBaseProps, 'children'>;

const CopyFill = memo(
  forwardRef<SVGSVGElement, CopyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.6 2.12q-1.44-.02-2.37.06c-.64.05-1.2.16-1.72.42a4.4 4.4 0 0 0-1.9 1.91 5 5 0 0 0-.43 1.72c-.06.63-.05 1.4-.05 2.37V11c0 1.32-.02 2.2.24 2.95a4.4 4.4 0 0 0 2.68 2.68c.57.2 1.22.24 2.09.24q0 .5.04.9c.05.64.16 1.2.42 1.72.42.82 1.1 1.49 1.91 1.9.52.27 1.08.38 1.72.43q.93.07 2.37.05h1.8q1.44.01 2.37-.05c.64-.05 1.2-.16 1.72-.42a4.4 4.4 0 0 0 1.9-1.91c.27-.52.38-1.08.43-1.72q.08-.93.06-2.37v-1.8q.01-1.44-.06-2.37a5 5 0 0 0-.42-1.72 4.4 4.4 0 0 0-1.91-1.9 5 5 0 0 0-1.72-.43q-.4-.04-.9-.05c0-.86-.04-1.51-.24-2.08a4.4 4.4 0 0 0-2.68-2.68c-.74-.26-1.63-.25-2.95-.25zM11 3.87c1.47 0 1.98.02 2.37.15.75.27 1.34.86 1.6 1.61.11.3.14.67.15 1.5H13.6q-1.44-.01-2.37.05c-.64.05-1.2.16-1.72.42a4.4 4.4 0 0 0-1.9 1.91 5 5 0 0 0-.43 1.72q-.07.93-.05 2.37v1.52c-.83 0-1.2-.04-1.5-.14a2.6 2.6 0 0 1-1.6-1.61c-.14-.39-.15-.9-.15-2.37V8.6c0-1 0-1.69.04-2.23.04-.53.12-.83.24-1.06q.39-.76 1.15-1.15c.23-.12.53-.2 1.06-.24.54-.04 1.24-.05 2.23-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

CopyFill.displayName = 'CopyFill';

// Triple export pattern (lucide-react style)
export { CopyFill, CopyFill as CopyFillIcon, CopyFill as SiCopyFill };
export default CopyFill;
export type { CopyFillProps };
