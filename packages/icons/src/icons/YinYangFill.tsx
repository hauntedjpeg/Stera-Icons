import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangFillProps = Omit<IconBaseProps, 'children'>;

const YinYangFill = memo(
  forwardRef<SVGSVGElement, YinYangFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 5.83c.93 0 1.67.75 1.67 1.67 0 .93-.74 1.67-1.67 1.67s-1.67-.74-1.67-1.67.75-1.67 1.67-1.67" />
        <path fillRule="evenodd" d="M12 2.13h.36c5.29.2 9.52 4.54 9.52 9.87 0 5.45-4.43 9.87-9.88 9.88l-.36-.02c-5.29-.19-9.51-4.53-9.51-9.86 0-5.45 4.42-9.87 9.87-9.87m0 1.75C7.51 3.88 3.88 7.5 3.88 12c0 2.42 1.06 4.6 2.74 6.08l.34.29-.05-.14-.04-.11-.03-.12-.03-.1-.04-.15-.02-.11-.03-.12-.02-.13-.02-.13-.01-.11-.02-.14-.03-.51c0-2.97 2.41-5.38 5.38-5.38 2 0 3.62-1.62 3.63-3.62 0-1.12-.51-2.12-1.31-2.79-.63-.52-1.44-.83-2.32-.83m0 10.94c-.92 0-1.67.75-1.67 1.68s.74 1.67 1.67 1.67 1.67-.75 1.67-1.67c0-.93-.74-1.68-1.67-1.68" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangFill.displayName = 'YinYangFill';

// Triple export pattern
export { YinYangFill, YinYangFill as YinYangFillIcon, YinYangFill as SiYinYangFill };
export default YinYangFill;
export type { YinYangFillProps };
