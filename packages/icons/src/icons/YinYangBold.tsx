import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangBoldProps = Omit<IconBaseProps, 'children'>;

const YinYangBold = memo(
  forwardRef<SVGSVGElement, YinYangBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.83c.93 0 1.67.74 1.67 1.67s-.74 1.67-1.67 1.67-1.67-.75-1.67-1.67.75-1.67 1.67-1.67M12 5.83c.93 0 1.67.75 1.67 1.67 0 .93-.74 1.67-1.67 1.67s-1.67-.74-1.67-1.67.75-1.67 1.67-1.67" />
        <path fillRule="evenodd" d="M12 2h.29C17.68 2.17 22 6.58 22 12c0 5.52-4.48 10-10 10h-.29C6.32 21.83 2 17.42 2 12 2 6.48 6.48 2 12 2m5.3 4q.2.72.2 1.5c0 3.04-2.46 5.5-5.5 5.5-1.93 0-3.5 1.57-3.5 3.5S10.07 20 12 20c4.42 0 8-3.58 8-8 0-2.39-1.05-4.53-2.7-6M12 4c-4.42 0-8 3.58-8 8 0 2.39 1.05 4.53 2.7 6q-.2-.72-.2-1.5c0-3.04 2.46-5.5 5.5-5.5 1.93 0 3.5-1.57 3.5-3.5S13.93 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangBold.displayName = 'YinYangBold';

// Triple export pattern
export { YinYangBold, YinYangBold as YinYangBoldIcon, YinYangBold as SiYinYangBold };
export default YinYangBold;
export type { YinYangBoldProps };
