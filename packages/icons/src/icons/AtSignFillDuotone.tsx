import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignFillDuotone = memo(
  forwardRef<SVGSVGElement, AtSignFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75a10.25 10.25 0 0 1 10.2 11.27 5.1 5.1 0 0 1-2.02 3.83c-1.09.75-2.46.88-3.62.28a1.25 1.25 0 0 0 1.23-2.17l-.11-.06c.3.16.7.16 1.08-.1.38-.27.84-.87.95-2.02q.04-.39.04-.78a7.75 7.75 0 1 0-5.17 7.31 1.25 1.25 0 0 1 .84 2.36A10.24 10.24 0 0 1 1.75 12C1.75 6.34 6.34 1.75 12 1.75" opacity={.4} />
        <path fillRule="evenodd" d="M15.6 7.15c.7 0 1.25.56 1.25 1.25v4.5c0 1.28.5 1.82.83 2a1.25 1.25 0 0 1-1.18 2.2 4 4 0 0 1-1.42-1.35A4.83 4.83 0 0 1 7.15 12a4.85 4.85 0 0 1 7.34-4.16c.2-.41.62-.69 1.11-.69M12 9.65a2.35 2.35 0 1 0 2.34 2.59l.01-.24-.01-.24A2.35 2.35 0 0 0 12 9.65" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFillDuotone.displayName = 'AtSignFillDuotone';

// Triple export pattern (lucide-react style)
export { AtSignFillDuotone, AtSignFillDuotone as AtSignFillDuotoneIcon, AtSignFillDuotone as SiAtSignFillDuotone };
export default AtSignFillDuotone;
export type { AtSignFillDuotoneProps };
