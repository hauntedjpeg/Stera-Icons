import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceRegularDuotone = memo(
  forwardRef<SVGSVGElement, PeaceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 3.75q.38 0 .75.04v7.9l5.59 5.59q-.49.57-1.06 1.06l-4.53-4.53v6.4q-.37.04-.75.04-.37 0-.75-.04v-6.4l-4.53 4.53q-.58-.49-1.06-1.06l5.59-5.6v-7.9z" />
    </IconBase>
  ))
);

PeaceRegularDuotone.displayName = 'PeaceRegularDuotone';

// Triple export pattern
export { PeaceRegularDuotone, PeaceRegularDuotone as PeaceRegularDuotoneIcon, PeaceRegularDuotone as SiPeaceRegularDuotone };
export default PeaceRegularDuotone;
export type { PeaceRegularDuotoneProps };
