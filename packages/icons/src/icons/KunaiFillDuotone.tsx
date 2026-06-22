import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KunaiFillDuotone = memo(
  forwardRef<SVGSVGElement, KunaiFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.38 12.02-.62 3.72q-.07.42-.44.63l-9.9 5.4a.88.88 0 0 1-1.19-1.19l5.4-9.9.05-.08a1 1 0 0 1 .58-.36l3.72-.62zM16.8 5.97c.26.54.7.97 1.23 1.23l-3 3-1.23-1.24z" opacity={0.4} />
        <path d="M11.83 8.23a.9.9 0 0 1 1.24 0l2.7 2.7a.87.87 0 0 1-1.24 1.24l-2.7-2.7a.9.9 0 0 1 0-1.24M19.2 2.13a2.67 2.67 0 1 1 0 5.34 2.67 2.67 0 0 1 0-5.34" />
    </IconBase>
  ))
);

KunaiFillDuotone.displayName = 'KunaiFillDuotone';

// Triple export pattern (lucide-react style)
export { KunaiFillDuotone, KunaiFillDuotone as KunaiFillDuotoneIcon, KunaiFillDuotone as SiKunaiFillDuotone };
export default KunaiFillDuotone;
export type { KunaiFillDuotoneProps };
