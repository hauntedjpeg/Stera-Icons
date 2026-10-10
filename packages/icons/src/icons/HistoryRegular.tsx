import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HistoryRegularProps = Omit<IconBaseProps, 'children'>;

const HistoryRegular = memo(
  forwardRef<SVGSVGElement, HistoryRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75c-4.64 0-8.52-3.24-9.5-7.58-.1-.4.15-.81.56-.9.4-.1.8.16.9.56.83 3.68 4.11 6.42 8.04 6.42 4.56 0 8.25-3.7 8.25-8.25S16.55 3.75 12 3.75c-3.12 0-5.84 1.73-7.24 4.29l2.35-.63c.4-.1.81.13.92.53s-.13.81-.53.92l-4.1 1.1c-.4.1-.81-.13-.92-.53l-1.1-4.1c-.1-.4.13-.81.53-.92s.82.13.92.53l.63 2.35c1.66-3 4.86-5.04 8.54-5.04" />
        <path d="M12 6.25c.41 0 .75.34.75.75v4.69l2.6 2.6c.3.3.3.78 0 1.07-.28.3-.76.3-1.05 0l-2.83-2.83q-.14-.15-.2-.35v-.05q-.03-.06-.02-.13V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

HistoryRegular.displayName = 'HistoryRegular';

// Triple export pattern
export { HistoryRegular, HistoryRegular as HistoryRegularIcon, HistoryRegular as SiHistoryRegular };
export default HistoryRegular;
export type { HistoryRegularProps };
