import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCirclePlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.13 12.75c.55 0 1 .45 1 1v2.38h2.37c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-2.37v2.37c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-2.37h-2.38c-.55 0-1-.45-1-1 0-.56.45-1 1-1h2.38v-2.38c0-.55.44-1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M6.88 12.75c2.41 0 4.37 1.96 4.37 4.38S9.29 21.5 6.88 21.5 2.5 19.54 2.5 17.13s1.96-4.38 4.38-4.38m0 2c-1.32 0-2.38 1.06-2.38 2.38 0 1.3 1.06 2.37 2.38 2.37 1.3 0 2.37-1.06 2.37-2.37 0-1.32-1.06-2.38-2.37-2.38M6.88 2.5c2.41 0 4.37 1.96 4.37 4.38s-1.96 4.37-4.37 4.37S2.5 9.29 2.5 6.88 4.46 2.5 6.88 2.5m0 2C5.56 4.5 4.5 5.56 4.5 6.88c0 1.3 1.06 2.37 2.38 2.37 1.3 0 2.37-1.06 2.37-2.37 0-1.32-1.06-2.38-2.37-2.38M17.13 2.5c2.41 0 4.37 1.96 4.37 4.38s-1.96 4.37-4.37 4.37-4.38-1.96-4.38-4.37 1.96-4.38 4.38-4.38m0 2c-1.32 0-2.38 1.06-2.38 2.38 0 1.3 1.06 2.37 2.38 2.37 1.3 0 2.37-1.06 2.37-2.37 0-1.32-1.06-2.38-2.37-2.38" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCirclePlusBoldDuotone.displayName = 'LayoutGridCirclePlusBoldDuotone';

// Triple export pattern
export { LayoutGridCirclePlusBoldDuotone, LayoutGridCirclePlusBoldDuotone as LayoutGridCirclePlusBoldDuotoneIcon, LayoutGridCirclePlusBoldDuotone as SiLayoutGridCirclePlusBoldDuotone };
export default LayoutGridCirclePlusBoldDuotone;
export type { LayoutGridCirclePlusBoldDuotoneProps };
