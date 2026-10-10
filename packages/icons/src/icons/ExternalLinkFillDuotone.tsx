import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExternalLinkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExternalLinkFillDuotone = memo(
  forwardRef<SVGSVGElement, ExternalLinkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 6.13c.48 0 .88.39.88.87s-.4.88-.88.88H9.1c-1 0-1.69 0-2.23.04-.53.04-.83.12-1.06.24q-.76.39-1.15 1.15c-.12.23-.2.53-.24 1.06-.04.54-.04 1.24-.04 2.23v2.3c0 1 0 1.69.04 2.23.04.53.12.83.24 1.06q.39.76 1.15 1.15c.23.12.53.2 1.06.24.54.04 1.24.05 2.23.05h2.3c1 0 1.69 0 2.23-.05.53-.04.83-.12 1.06-.24q.76-.39 1.15-1.15c.12-.23.2-.53.24-1.06.04-.54.05-1.24.05-2.23v-2.4c0-.48.39-.87.87-.87s.88.39.88.87v2.4q.02 1.44-.06 2.37c-.05.64-.16 1.2-.42 1.72-.42.82-1.09 1.49-1.91 1.9-.52.27-1.08.38-1.72.43q-.93.07-2.37.05H9.1q-1.44.01-2.37-.05c-.64-.05-1.2-.16-1.72-.42-.82-.42-1.49-1.09-1.9-1.91-.27-.52-.38-1.08-.43-1.72q-.08-.93-.06-2.37v-2.3q-.02-1.44.06-2.37c.05-.64.16-1.2.42-1.72.42-.82 1.09-1.49 1.91-1.9.52-.27 1.08-.38 1.72-.43.63-.06 1.4-.05 2.37-.05z" opacity={.4} />
        <path d="M20.5 2.63c.48 0 .87.39.87.87V10c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-2.63-2.63-6.63 6.63c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l6.63-6.63-2.63-2.63c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ExternalLinkFillDuotone.displayName = 'ExternalLinkFillDuotone';

// Triple export pattern
export { ExternalLinkFillDuotone, ExternalLinkFillDuotone as ExternalLinkFillDuotoneIcon, ExternalLinkFillDuotone as SiExternalLinkFillDuotone };
export default ExternalLinkFillDuotone;
export type { ExternalLinkFillDuotoneProps };
