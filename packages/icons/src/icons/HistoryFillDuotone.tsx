import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HistoryFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HistoryFillDuotone = memo(
  forwardRef<SVGSVGElement, HistoryFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13a9.88 9.88 0 1 1-9.63 12.06.88.88 0 0 1 1.7-.38A8.13 8.13 0 1 0 6.1 6.42l1.65.96a.88.88 0 0 1-.2 1.6l-4.1 1.1a.9.9 0 0 1-1.08-.62l-1.1-4.1a.88.88 0 0 1 1.29-.98l2 1.15A9.9 9.9 0 0 1 12 2.13" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.64l2.57 2.57a.88.88 0 0 1-1.24 1.24l-2.82-2.82a1 1 0 0 1-.18-.26l-.02-.03-.01-.04-.04-.12v-.01l-.02-.17V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

HistoryFillDuotone.displayName = 'HistoryFillDuotone';

// Triple export pattern (lucide-react style)
export { HistoryFillDuotone, HistoryFillDuotone as HistoryFillDuotoneIcon, HistoryFillDuotone as SiHistoryFillDuotone };
export default HistoryFillDuotone;
export type { HistoryFillDuotoneProps };
