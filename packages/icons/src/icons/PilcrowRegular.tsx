import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowRegularProps = Omit<IconBaseProps, 'children'>;

const PilcrowRegular = memo(
  forwardRef<SVGSVGElement, PilcrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.75h-2.5V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25H10c-3.18 0-5.75-2.57-5.75-5.75S6.82 3.25 10 3.25zm-9 1.5c-2.35 0-4.25 1.9-4.25 4.25s1.9 4.25 4.25 4.25h2.25v-8.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PilcrowRegular.displayName = 'PilcrowRegular';

// Triple export pattern
export { PilcrowRegular, PilcrowRegular as PilcrowRegularIcon, PilcrowRegular as SiPilcrowRegular };
export default PilcrowRegular;
export type { PilcrowRegularProps };
