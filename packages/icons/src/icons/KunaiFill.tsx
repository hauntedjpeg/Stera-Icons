import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiFillProps = Omit<IconBaseProps, 'children'>;

const KunaiFill = memo(
  forwardRef<SVGSVGElement, KunaiFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.4 3.13c1.37 0 2.47 1.1 2.48 2.47s-1.11 2.48-2.48 2.48q-.54 0-1.02-.23l-2.54 2.55.58.58c.34.34.34.9 0 1.24s-.9.34-1.24 0l-.52 3.12q-.07.42-.44.63l-8.8 4.8c-.34.18-.76.12-1.04-.15-.27-.28-.33-.7-.15-1.04l4.8-8.8.06-.08q.2-.3.57-.36l3.12-.52c-.34-.35-.34-.9 0-1.24s.9-.34 1.24 0l.58.58 2.54-2.54q-.21-.47-.22-1.02c0-1.37 1.11-2.47 2.48-2.47" />
    </IconBase>
  ))
);

KunaiFill.displayName = 'KunaiFill';

// Triple export pattern
export { KunaiFill, KunaiFill as KunaiFillIcon, KunaiFill as SiKunaiFill };
export default KunaiFill;
export type { KunaiFillProps };
