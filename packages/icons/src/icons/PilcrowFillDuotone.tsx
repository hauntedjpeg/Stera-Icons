import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PilcrowFillDuotone = memo(
  forwardRef<SVGSVGElement, PilcrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.13 4.88v8.25H10a4.12 4.12 0 1 1 0-8.26z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.13a.88.88 0 0 1 0 1.75h-1.12V20a.88.88 0 0 1-1.75 0V4.88h-2.25V20a.88.88 0 0 1-1.76 0v-5.12H10a5.87 5.87 0 1 1 0-11.75zm-9 1.75a4.13 4.13 0 0 0 0 8.25h2.13V4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PilcrowFillDuotone.displayName = 'PilcrowFillDuotone';

// Triple export pattern (lucide-react style)
export { PilcrowFillDuotone, PilcrowFillDuotone as PilcrowFillDuotoneIcon, PilcrowFillDuotone as SiPilcrowFillDuotone };
export default PilcrowFillDuotone;
export type { PilcrowFillDuotoneProps };
