import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DiamondFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DiamondFillDuotone = memo(
  forwardRef<SVGSVGElement, DiamondFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.34 3.22q.66-.21 1.32 0c.18.06.4.19.74.48.35.3.77.7 1.38 1.31l4.2 4.21c.61.6 1.03 1.03 1.32 1.37s.42.56.48.75q.21.66 0 1.32c-.06.18-.19.4-.48.75-.3.34-.7.76-1.31 1.37l-4.21 4.2c-.6.61-1.03 1.03-1.37 1.32s-.57.42-.75.48q-.66.21-1.32 0c-.19-.06-.4-.19-.75-.48-.34-.3-.76-.7-1.37-1.31l-4.2-4.21c-.61-.6-1.03-1.03-1.32-1.37a2 2 0 0 1-.48-.75 2 2 0 0 1 0-1.32c.06-.19.19-.4.48-.75.3-.34.7-.76 1.31-1.37l4.21-4.2c.6-.61 1.03-1.03 1.37-1.32s.56-.42.75-.48" opacity={.4} />
        <path fillRule="evenodd" d="M10.8 1.56a4 4 0 0 1 2.4 0c.5.16.91.44 1.34.8q.6.54 1.47 1.42l4.21 4.2q.88.88 1.42 1.48.55.63.8 1.34c.25.78.25 1.62 0 2.4-.16.5-.44.91-.8 1.34q-.54.6-1.42 1.47l-4.2 4.21q-.88.88-1.48 1.42c-.43.36-.85.64-1.34.8-.78.26-1.62.26-2.4 0-.5-.16-.91-.44-1.34-.8q-.6-.54-1.47-1.42l-4.21-4.2q-.88-.88-1.42-1.48a4 4 0 0 1-.8-1.34 4 4 0 0 1 0-2.4c.16-.5.44-.91.8-1.34Q2.9 8.86 3.78 8l4.2-4.21q.88-.88 1.48-1.42.63-.55 1.34-.8m1.86 1.66a2 2 0 0 0-1.32 0c-.19.06-.4.19-.75.48-.34.3-.76.7-1.37 1.31l-4.2 4.21c-.61.6-1.03 1.03-1.32 1.37s-.42.56-.48.75q-.21.66 0 1.32c.06.19.19.4.48.75.3.34.7.76 1.31 1.37l4.21 4.2c.6.61 1.03 1.03 1.37 1.32s.56.42.75.48q.66.21 1.32 0c.18-.06.4-.19.75-.48.34-.3.76-.7 1.37-1.31l4.2-4.21c.61-.6 1.03-1.03 1.32-1.37s.42-.56.48-.75q.21-.66 0-1.32c-.06-.19-.19-.4-.48-.75-.3-.34-.7-.76-1.31-1.37l-4.21-4.2c-.6-.61-1.03-1.03-1.37-1.32a2 2 0 0 0-.75-.48" clipRule="evenodd" />
    </IconBase>
  ))
);

DiamondFillDuotone.displayName = 'DiamondFillDuotone';

// Triple export pattern (lucide-react style)
export { DiamondFillDuotone, DiamondFillDuotone as DiamondFillDuotoneIcon, DiamondFillDuotone as SiDiamondFillDuotone };
export default DiamondFillDuotone;
export type { DiamondFillDuotoneProps };
