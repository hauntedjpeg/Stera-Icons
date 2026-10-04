import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniFillProps = Omit<IconBaseProps, 'children'>;

const MartiniFill = memo(
  forwardRef<SVGSVGElement, MartiniFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 3.13a.88.88 0 0 1 .62 1.49l-8.25 8.24v6.27H16a.87.87 0 1 1 0 1.75H8a.88.88 0 0 1 0-1.75h3.12v-6.27L2.88 4.62a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

MartiniFill.displayName = 'MartiniFill';

// Triple export pattern (lucide-react style)
export { MartiniFill, MartiniFill as MartiniFillIcon, MartiniFill as SiMartiniFill };
export default MartiniFill;
export type { MartiniFillProps };
