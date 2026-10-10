import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeBoldProps = Omit<IconBaseProps, 'children'>;

const StethoscopeBold = memo(
  forwardRef<SVGSVGElement, StethoscopeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.5c.55 0 1 .45 1 1 1.66 0 3 1.34 3 3V10c0 3.21-2.33 5.88-5.4 6.4.41 1.78 2 3.1 3.9 3.1h.25c2.35 0 4.25-1.9 4.25-4.25v-.92c-1.16-.42-2-1.52-2-2.83 0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.3-.84 2.41-2 2.83v.92c0 3.45-2.8 6.25-6.25 6.25h-.25c-3 0-5.48-2.2-5.93-5.07C4.42 15.98 2 13.27 2 10V6.5c0-1.66 1.34-3 3-3 0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1-.52 0-.94-.4-1-.9v-.1c-.55 0-1 .45-1 1V10c0 2.49 2.01 4.5 4.5 4.5S13 12.49 13 10V6.5c0-.55-.45-1-1-1v.1c-.06.5-.48.9-1 .9-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1m8 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

StethoscopeBold.displayName = 'StethoscopeBold';

// Triple export pattern
export { StethoscopeBold, StethoscopeBold as StethoscopeBoldIcon, StethoscopeBold as SiStethoscopeBold };
export default StethoscopeBold;
export type { StethoscopeBoldProps };
