import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HistoryBoldProps = Omit<IconBaseProps, 'children'>;

const HistoryBold = memo(
  forwardRef<SVGSVGElement, HistoryBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.32-9.75-7.78-.12-.54.21-1.07.75-1.2s1.08.22 1.2.76C5 17.34 8.2 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8C9.2 4 6.72 5.45 5.3 7.64l1.75-.47c.53-.14 1.08.17 1.22.7.14.54-.17 1.09-.7 1.23l-4.1 1.1c-.54.14-1.09-.18-1.23-.7l-1.1-4.1c-.14-.54.18-1.09.71-1.23s1.08.17 1.22.7l.48 1.78C5.32 3.85 8.45 2 12 2" />
        <path d="M12 6c.55 0 1 .45 1 1v4.59l2.54 2.53c.39.4.39 1.02 0 1.42-.4.39-1.03.39-1.42 0L11.3 12.7q-.15-.17-.23-.37L11 12.1V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

HistoryBold.displayName = 'HistoryBold';

// Triple export pattern
export { HistoryBold, HistoryBold as HistoryBoldIcon, HistoryBold as SiHistoryBold };
export default HistoryBold;
export type { HistoryBoldProps };
