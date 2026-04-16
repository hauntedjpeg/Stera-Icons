import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots66FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6m-.18-8.31a.9.9 0 0 0-.98-.18l-.13.08-.05.03-.14.1-2.03 1.41a61 61 0 0 0-2.86 2.1 1.88 1.88 0 1 0 2.7 2.6c.34-.4 1.25-1.68 2.05-2.8l1.42-2.04.09-.14.03-.04a.9.9 0 0 0-.1-1.12M6 10.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26M8.55 6.96a1.12 1.12 0 1 0-1.59 1.6 1.12 1.12 0 0 0 1.6-1.6M12 4.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66Fill.displayName = 'GaugeDots66Fill';

// Triple export pattern (lucide-react style)
export { GaugeDots66Fill, GaugeDots66Fill as GaugeDots66FillIcon, GaugeDots66Fill as SiGaugeDots66Fill };
export default GaugeDots66Fill;
export type { GaugeDots66FillProps };
