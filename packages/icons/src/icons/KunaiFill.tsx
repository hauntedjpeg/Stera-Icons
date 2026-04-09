import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiFillProps = Omit<IconBaseProps, 'children'>;

const KunaiFill = memo(
  forwardRef<SVGSVGElement, KunaiFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="kunai-fill" {...props}>
      <path d="M18.4 3.13a2.48 2.48 0 1 1-1.02 4.72l-2.54 2.55.58.58a.88.88 0 0 1-1.24 1.24l-.52 3.12q-.07.42-.44.63l-8.8 4.8a.88.88 0 0 1-1.19-1.19l4.8-8.8.05-.08a1 1 0 0 1 .58-.36l3.12-.52a.88.88 0 0 1 1.24-1.24l.58.58 2.54-2.54a2.46 2.46 0 0 1 2.26-3.5" />
    </IconBase>
  ))
);

KunaiFill.displayName = 'KunaiFill';

// Triple export pattern (lucide-react style)
export { KunaiFill, KunaiFill as KunaiFillIcon, KunaiFill as SiKunaiFill };
export default KunaiFill;
export type { KunaiFillProps };
