import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots0FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m5.04 13.45a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6m-3.71-4.78a1.9 1.9 0 0 0-2.7.05 60 60 0 0 0-2.05 2.8l-1.41 2.04-.1.14-.03.04a.88.88 0 0 0 1.08 1.3l.13-.08.05-.03.14-.1 2.03-1.41a61 61 0 0 0 2.86-2.1c.73-.73.73-1.91 0-2.65m-7.33.2a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26m-9.45-3.9a1.12 1.12 0 1 0-1.59 1.58 1.12 1.12 0 0 0 1.6-1.59m8.49 0a1.12 1.12 0 1 0-1.6 1.58 1.12 1.12 0 0 0 1.6-1.59M12 4.86a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0Fill.displayName = 'GaugeDots0Fill';

// Triple export pattern (lucide-react style)
export { GaugeDots0Fill, GaugeDots0Fill as GaugeDots0FillIcon, GaugeDots0Fill as SiGaugeDots0Fill };
export default GaugeDots0Fill;
export type { GaugeDots0FillProps };
