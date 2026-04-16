import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0FillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots0FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m5.04 13.45a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6m-3.71-4.78a1.9 1.9 0 0 0-2.7.05 60 60 0 0 0-2.05 2.8l-1.41 2.04-.1.14-.03.04a.88.88 0 0 0 1.08 1.3l.14-.08.04-.03.14-.1 2.03-1.41a61 61 0 0 0 2.86-2.1c.73-.73.73-1.91 0-2.65m-7.33.2a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m-9.45-3.9a1.12 1.12 0 1 0-1.59 1.58 1.12 1.12 0 0 0 1.6-1.59m8.49 0a1.12 1.12 0 1 0-1.6 1.58 1.12 1.12 0 0 0 1.6-1.59M12 4.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" opacity={.4} />
        <path d="M15.45 15.45a1.12 1.12 0 1 1 1.59 1.59 1.12 1.12 0 0 1-1.6-1.6M10.67 10.67a1.88 1.88 0 1 1 2.6 2.7c-.38.34-1.67 1.25-2.8 2.05l-2.03 1.42-.14.09-.04.03-.14.08a.88.88 0 0 1-1.08-1.3l.03-.04.1-.14 1.41-2.03a60 60 0 0 1 2.1-2.86M6 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M18 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M6.96 6.96a1.12 1.12 0 1 1 1.6 1.6 1.12 1.12 0 0 1-1.6-1.6M15.45 6.96a1.12 1.12 0 1 1 1.59 1.6 1.12 1.12 0 0 1-1.6-1.6M12 4.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
    </IconBase>
  ))
);

GaugeDots0FillDuotone.displayName = 'GaugeDots0FillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots0FillDuotone, GaugeDots0FillDuotone as GaugeDots0FillDuotoneIcon, GaugeDots0FillDuotone as SiGaugeDots0FillDuotone };
export default GaugeDots0FillDuotone;
export type { GaugeDots0FillDuotoneProps };
