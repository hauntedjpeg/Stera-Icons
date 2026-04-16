import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66FillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.55 15.45a1.12 1.12 0 1 0-1.59 1.59 1.12 1.12 0 0 0 1.6-1.6m8.49 0a1.12 1.12 0 1 0-1.6 1.59 1.12 1.12 0 0 0 1.6-1.6m-.18-8.31a.9.9 0 0 0-.98-.18l-.14.08-.04.03-.14.1-2.03 1.41a61 61 0 0 0-2.86 2.1 1.88 1.88 0 1 0 2.7 2.6c.34-.4 1.25-1.68 2.05-2.8l1.42-2.04.09-.14.03-.04a.9.9 0 0 0-.1-1.12M6 10.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26m12 0a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.26M8.55 6.96a1.12 1.12 0 1 0-1.59 1.6 1.12 1.12 0 0 0 1.6-1.6M12 4.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25" clipRule="evenodd" opacity={.4} />
        <path d="M6.96 15.45a1.12 1.12 0 1 1 1.6 1.59 1.12 1.12 0 0 1-1.6-1.6M15.45 15.45a1.12 1.12 0 1 1 1.59 1.59 1.12 1.12 0 0 1-1.6-1.6M15.88 6.96a.88.88 0 0 1 1.08 1.3l-.03.04-.1.14-1.41 2.03a60 60 0 0 1-2.1 2.86 1.88 1.88 0 1 1-2.6-2.7c.4-.34 1.68-1.25 2.8-2.05l2.04-1.41.14-.1.04-.03zM6 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M18 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M6.96 6.96a1.12 1.12 0 1 1 1.6 1.6 1.12 1.12 0 0 1-1.6-1.6M12 4.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
    </IconBase>
  ))
);

GaugeDots66FillDuotone.displayName = 'GaugeDots66FillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots66FillDuotone, GaugeDots66FillDuotone as GaugeDots66FillDuotoneIcon, GaugeDots66FillDuotone as SiGaugeDots66FillDuotone };
export default GaugeDots66FillDuotone;
export type { GaugeDots66FillDuotoneProps };
