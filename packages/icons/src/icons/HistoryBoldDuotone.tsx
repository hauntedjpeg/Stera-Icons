import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HistoryBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HistoryBoldDuotone = memo(
  forwardRef<SVGSVGElement, HistoryBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2a10 10 0 1 1-9.75 12.22 1 1 0 0 1 1.95-.44 8 8 0 1 0 1.1-6.14l1.75-.47a1 1 0 0 1 .51 1.93l-4.1 1.1a1 1 0 0 1-1.22-.7l-1.1-4.1a1 1 0 1 1 1.93-.53l.48 1.78A10 10 0 0 1 12 2" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v4.59l2.54 2.53a1 1 0 1 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

HistoryBoldDuotone.displayName = 'HistoryBoldDuotone';

// Triple export pattern (lucide-react style)
export { HistoryBoldDuotone, HistoryBoldDuotone as HistoryBoldDuotoneIcon, HistoryBoldDuotone as SiHistoryBoldDuotone };
export default HistoryBoldDuotone;
export type { HistoryBoldDuotoneProps };
