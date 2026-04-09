import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CopyFillProps = Omit<IconBaseProps, 'children'>;

const CopyFill = memo(
  forwardRef<SVGSVGElement, CopyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="copy-fill" {...props}>
      <path fillRule="evenodd" d="M15.4 2.12q1.44-.02 2.37.06c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37V11c0 1.32.02 2.2-.24 2.95a4.4 4.4 0 0 1-2.68 2.68c-.57.2-1.22.24-2.09.24q0 .5-.04.9c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.52.27-1.08.38-1.72.43q-.93.07-2.37.05H8.6q-1.44.01-2.37-.05a5 5 0 0 1-1.72-.42 4.4 4.4 0 0 1-1.9-1.91 5 5 0 0 1-.43-1.72q-.08-.93-.06-2.37v-1.8q-.02-1.44.06-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43q.4-.04.9-.05c0-.86.04-1.51.24-2.08a4.4 4.4 0 0 1 2.68-2.68c.74-.26 1.63-.25 2.95-.25zM13 3.87c-1.47 0-1.98.02-2.37.15-.75.27-1.34.86-1.6 1.61-.11.3-.14.67-.15 1.5h1.52q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v1.52c.83 0 1.2-.04 1.5-.14a2.6 2.6 0 0 0 1.6-1.61c.14-.39.16-.9.16-2.37V8.6c0-1 0-1.69-.05-2.23a3 3 0 0 0-.24-1.06q-.39-.76-1.15-1.15a3 3 0 0 0-1.06-.24c-.54-.04-1.24-.05-2.23-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

CopyFill.displayName = 'CopyFill';

// Triple export pattern (lucide-react style)
export { CopyFill, CopyFill as CopyFillIcon, CopyFill as SiCopyFill };
export default CopyFill;
export type { CopyFillProps };
