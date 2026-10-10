import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PilcrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, PilcrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 20c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75h1.5zM17.75 20c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75h1.5z" opacity={0.4} />
        <path d="M19 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-2.35 0-4.25 1.9-4.25 4.25s1.9 4.25 4.25 4.25h2.25v1.5H10c-3.18 0-5.75-2.57-5.75-5.75S6.82 3.25 10 3.25z" />
    </IconBase>
  ))
);

PilcrowRegularDuotone.displayName = 'PilcrowRegularDuotone';

// Triple export pattern
export { PilcrowRegularDuotone, PilcrowRegularDuotone as PilcrowRegularDuotoneIcon, PilcrowRegularDuotone as SiPilcrowRegularDuotone };
export default PilcrowRegularDuotone;
export type { PilcrowRegularDuotoneProps };
