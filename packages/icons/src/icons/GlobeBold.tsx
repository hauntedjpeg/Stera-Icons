import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeBoldProps = Omit<IconBaseProps, 'children'>;

const GlobeBold = memo(
  forwardRef<SVGSVGElement, GlobeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M4.06 13c.4 3.17 2.64 5.76 5.62 6.66-1.32-2.04-2.06-4.33-2.22-6.66zm12.48 0c-.16 2.33-.9 4.62-2.22 6.66 2.98-.9 5.22-3.5 5.62-6.66zm-7.08 0c.2 2.3 1.04 4.56 2.54 6.47 1.5-1.91 2.35-4.17 2.54-6.47zm.22-8.66c-2.98.9-5.22 3.5-5.62 6.66h3.4c.16-2.33.9-4.63 2.22-6.66m2.32.2C10.5 6.43 9.65 8.7 9.46 11h5.08c-.2-2.3-1.04-4.56-2.54-6.47m2.32-.2c1.32 2.04 2.06 4.33 2.22 6.66h3.4c-.4-3.17-2.64-5.76-5.62-6.66" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBold.displayName = 'GlobeBold';

// Triple export pattern
export { GlobeBold, GlobeBold as GlobeBoldIcon, GlobeBold as SiGlobeBold };
export default GlobeBold;
export type { GlobeBoldProps };
