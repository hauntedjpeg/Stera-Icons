import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HistoryFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HistoryFillDuotone = memo(
  forwardRef<SVGSVGElement, HistoryFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c5.45 0 9.87 4.42 9.87 9.87s-4.42 9.87-9.87 9.88c-4.7 0-8.63-3.29-9.63-7.69-.1-.47.19-.94.66-1.04s.94.19 1.05.66c.82 3.61 4.05 6.31 7.92 6.32 4.49 0 8.12-3.64 8.12-8.13S16.5 3.88 12 3.88c-2.33 0-4.43.97-5.9 2.54l1.64.96c.3.17.48.52.43.87s-.3.64-.64.73l-4.1 1.1c-.46.12-.94-.15-1.07-.62l-1.1-4.1c-.09-.34.03-.7.31-.92s.67-.24.98-.06l2 1.15c1.8-2.09 4.47-3.4 7.45-3.4" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.64l2.57 2.57c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.82-2.82-.12-.14-.06-.12-.02-.03-.01-.04-.04-.12v-.01l-.02-.17V7c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

HistoryFillDuotone.displayName = 'HistoryFillDuotone';

// Triple export pattern
export { HistoryFillDuotone, HistoryFillDuotone as HistoryFillDuotoneIcon, HistoryFillDuotone as SiHistoryFillDuotone };
export default HistoryFillDuotone;
export type { HistoryFillDuotoneProps };
