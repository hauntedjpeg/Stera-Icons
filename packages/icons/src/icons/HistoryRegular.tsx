import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HistoryRegularProps = Omit<IconBaseProps, 'children'>;

const HistoryRegular = memo(
  forwardRef<SVGSVGElement, HistoryRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25a9.75 9.75 0 1 1-9.5 11.92.75.75 0 0 1 1.45-.34 8.25 8.25 0 1 0 .81-5.8l2.35-.62a.75.75 0 0 1 .39 1.45l-4.1 1.1a.75.75 0 0 1-.92-.53l-1.1-4.1a.75.75 0 0 1 1.45-.4l.63 2.36A9.8 9.8 0 0 1 12 2.25" />
        <path d="M12 6.25c.41 0 .75.34.75.75v4.69l2.6 2.6a.75.75 0 1 1-1.05 1.07l-2.83-2.83a1 1 0 0 1-.2-.35v-.05l-.02-.13V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

HistoryRegular.displayName = 'HistoryRegular';

// Triple export pattern (lucide-react style)
export { HistoryRegular, HistoryRegular as HistoryRegularIcon, HistoryRegular as SiHistoryRegular };
export default HistoryRegular;
export type { HistoryRegularProps };
