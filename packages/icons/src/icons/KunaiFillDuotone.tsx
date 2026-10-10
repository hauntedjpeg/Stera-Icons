import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KunaiFillDuotone = memo(
  forwardRef<SVGSVGElement, KunaiFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.38 12.02-.62 3.72q-.07.42-.44.63l-9.9 5.4c-.34.18-.77.12-1.04-.15-.27-.28-.33-.7-.15-1.04l5.4-9.9.05-.08q.21-.3.58-.36l3.72-.62zM16.8 5.97c.26.54.7.97 1.23 1.23l-3 3-1.23-1.24z" opacity={0.4} />
        <path d="M11.83 8.23c.34-.34.9-.34 1.24 0l2.7 2.7c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.7-2.7c-.34-.34-.34-.9 0-1.24M19.2 2.13c1.48 0 2.67 1.2 2.67 2.67 0 1.48-1.2 2.67-2.67 2.67-1.48 0-2.68-1.2-2.68-2.67 0-1.48 1.2-2.67 2.68-2.67" />
    </IconBase>
  ))
);

KunaiFillDuotone.displayName = 'KunaiFillDuotone';

// Triple export pattern
export { KunaiFillDuotone, KunaiFillDuotone as KunaiFillDuotoneIcon, KunaiFillDuotone as SiKunaiFillDuotone };
export default KunaiFillDuotone;
export type { KunaiFillDuotoneProps };
