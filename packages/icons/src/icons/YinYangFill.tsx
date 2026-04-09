import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangFillProps = Omit<IconBaseProps, 'children'>;

const YinYangFill = memo(
  forwardRef<SVGSVGElement, YinYangFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang-fill" {...props}>
      <path d="M12 5.83a1.67 1.67 0 1 1 0 3.34 1.67 1.67 0 0 1 0-3.34" />
        <path fillRule="evenodd" d="M12 2.13h.36a9.87 9.87 0 1 1-.36 0m0 1.75a8.12 8.12 0 0 0-5.38 14.2l.34.29-.05-.14-.04-.11-.03-.12-.07-.25-.02-.11-.03-.12-.02-.13-.02-.13-.01-.11-.02-.14-.03-.51c0-2.97 2.41-5.38 5.38-5.38a3.62 3.62 0 0 0 0-7.24m0 10.94a1.68 1.68 0 1 0 0 3.35 1.68 1.68 0 0 0 0-3.35" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangFill.displayName = 'YinYangFill';

// Triple export pattern (lucide-react style)
export { YinYangFill, YinYangFill as YinYangFillIcon, YinYangFill as SiYinYangFill };
export default YinYangFill;
export type { YinYangFillProps };
