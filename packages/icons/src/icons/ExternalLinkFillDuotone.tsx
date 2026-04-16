import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExternalLinkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExternalLinkFillDuotone = memo(
  forwardRef<SVGSVGElement, ExternalLinkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 6.13a.88.88 0 0 1 0 1.75H9.1c-1 0-1.69 0-2.23.04a3 3 0 0 0-1.06.24q-.76.39-1.15 1.15c-.12.23-.2.53-.24 1.06-.04.54-.04 1.24-.04 2.23v2.3c0 1 0 1.69.04 2.23.04.53.12.83.24 1.06q.39.76 1.15 1.15c.23.12.53.2 1.06.24.54.04 1.24.05 2.23.05h2.3c1 0 1.69 0 2.23-.05a3 3 0 0 0 1.06-.24q.76-.39 1.15-1.15c.12-.23.2-.53.24-1.06.04-.54.05-1.24.05-2.23v-2.4a.88.88 0 0 1 1.75 0v2.4q.02 1.44-.06 2.37c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.52.27-1.08.38-1.72.43q-.93.07-2.37.05H9.1q-1.44.01-2.37-.05A5 5 0 0 1 5 20.9a4.4 4.4 0 0 1-1.9-1.91 5 5 0 0 1-.43-1.72q-.08-.93-.06-2.37v-2.3q-.02-1.44.06-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43c.63-.06 1.4-.05 2.37-.05z" opacity={.4} />
        <path d="M20.5 2.63c.48 0 .87.39.87.87V10a.88.88 0 0 1-1.49.62l-2.63-2.63-6.63 6.63a.88.88 0 0 1-1.24-1.24l6.63-6.63-2.63-2.63a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ExternalLinkFillDuotone.displayName = 'ExternalLinkFillDuotone';

// Triple export pattern (lucide-react style)
export { ExternalLinkFillDuotone, ExternalLinkFillDuotone as ExternalLinkFillDuotoneIcon, ExternalLinkFillDuotone as SiExternalLinkFillDuotone };
export default ExternalLinkFillDuotone;
export type { ExternalLinkFillDuotoneProps };
