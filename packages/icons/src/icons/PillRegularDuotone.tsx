import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PillRegularDuotone = memo(
  forwardRef<SVGSVGElement, PillRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.97 3.97a5 5 0 0 1 7.06 7.06L16.06 15 15 13.94l3.97-3.97a3.5 3.5 0 0 0-4.94-4.94L10.06 9 9 7.94z" opacity={.4} />
        <path fillRule="evenodd" d="m16.06 15-5.03 5.03a5 5 0 0 1-7.06-7.06L9 7.94zm-11.03-.97a3.5 3.5 0 0 0 4.94 4.94L13.94 15 9 10.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

PillRegularDuotone.displayName = 'PillRegularDuotone';

// Triple export pattern (lucide-react style)
export { PillRegularDuotone, PillRegularDuotone as PillRegularDuotoneIcon, PillRegularDuotone as SiPillRegularDuotone };
export default PillRegularDuotone;
export type { PillRegularDuotoneProps };
