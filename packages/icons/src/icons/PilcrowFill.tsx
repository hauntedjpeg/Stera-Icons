import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowFillProps = Omit<IconBaseProps, 'children'>;

const PilcrowFill = memo(
  forwardRef<SVGSVGElement, PilcrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 3.13a.88.88 0 0 1 0 1.75h-1.12V20a.88.88 0 0 1-1.75 0V4.88h-2.25V20a.88.88 0 0 1-1.76 0v-5.12H10a5.87 5.87 0 1 1 0-11.75z" />
    </IconBase>
  ))
);

PilcrowFill.displayName = 'PilcrowFill';

// Triple export pattern (lucide-react style)
export { PilcrowFill, PilcrowFill as PilcrowFillIcon, PilcrowFill as SiPilcrowFill };
export default PilcrowFill;
export type { PilcrowFillProps };
