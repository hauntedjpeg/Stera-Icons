import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeBoldDuotone = memo(
  forwardRef<SVGSVGElement, GlobeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10q.39 0 .69-.27c.4-.38.42-1.02.04-1.42q-.39-.4-.73-.84c3.44-4.38 3.44-10.56 0-14.94q.34-.44.73-.84c.38-.4.36-1.04-.04-1.42Q12.39 2 12 2m4.54 11c-.16 2.33-.9 4.62-2.22 6.66 2.98-.9 5.22-3.5 5.62-6.66zm-2.22-8.66c1.32 2.04 2.06 4.33 2.22 6.66h3.4c-.4-3.17-2.64-5.76-5.62-6.66" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 2q.39 0 .69.27c.4.38.42 1.02.04 1.42C10.77 5.76 9.68 8.35 9.46 11h5.08q.08 1 0 2H9.46c.22 2.65 1.3 5.24 3.27 7.31.38.4.36 1.04-.04 1.42q-.3.27-.69.27C6.48 22 2 17.52 2 12S6.48 2 12 2M4.06 13c.4 3.17 2.64 5.76 5.62 6.66-1.32-2.04-2.06-4.33-2.22-6.66zm5.62-8.66c-2.98.9-5.22 3.5-5.62 6.66h3.4c.16-2.33.9-4.63 2.22-6.66" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeBoldDuotone.displayName = 'GlobeBoldDuotone';

// Triple export pattern
export { GlobeBoldDuotone, GlobeBoldDuotone as GlobeBoldDuotoneIcon, GlobeBoldDuotone as SiGlobeBoldDuotone };
export default GlobeBoldDuotone;
export type { GlobeBoldDuotoneProps };
