import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CopyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CopyFillDuotone = memo(
  forwardRef<SVGSVGElement, CopyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.6 2.13q-1.44-.01-2.37.05c-.64.05-1.2.16-1.72.42a4.4 4.4 0 0 0-1.9 1.91 5 5 0 0 0-.43 1.72q-.08.93-.06 2.37v1.8q-.02 1.44.06 2.37c.05.64.16 1.2.42 1.72.42.82 1.09 1.49 1.91 1.9.52.27 1.08.38 1.72.43q.4.04.9.04V13.6q-.01-1.44.05-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43c.63-.06 1.4-.05 2.37-.05h3.27q-.01-.5-.05-.9a5 5 0 0 0-.42-1.72 4.4 4.4 0 0 0-1.91-1.9 5 5 0 0 0-1.72-.43q-.93-.08-2.37-.06z" opacity={.4} />
        <path d="M13.6 7.13q-1.44-.01-2.37.05c-.64.05-1.2.16-1.72.42a4.4 4.4 0 0 0-1.9 1.91 5 5 0 0 0-.43 1.72c-.06.63-.05 1.4-.05 2.37v1.8q-.01 1.44.05 2.37c.05.64.16 1.2.42 1.72.42.82 1.09 1.49 1.91 1.9.52.27 1.08.38 1.72.43q.93.07 2.37.05h1.8q1.44.01 2.37-.05c.64-.05 1.2-.16 1.72-.42a4.4 4.4 0 0 0 1.9-1.91c.27-.52.38-1.08.43-1.72q.07-.93.05-2.37v-1.8q.01-1.44-.05-2.37a5 5 0 0 0-.42-1.72 4.4 4.4 0 0 0-1.91-1.9 5 5 0 0 0-1.72-.43c-.63-.06-1.4-.05-2.37-.05z" />
    </IconBase>
  ))
);

CopyFillDuotone.displayName = 'CopyFillDuotone';

// Triple export pattern (lucide-react style)
export { CopyFillDuotone, CopyFillDuotone as CopyFillDuotoneIcon, CopyFillDuotone as SiCopyFillDuotone };
export default CopyFillDuotone;
export type { CopyFillDuotoneProps };
