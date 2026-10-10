import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
        <path d="M20.21 11.25q.04.38.04.75 0 .38-.04.75H3.8q-.04-.37-.04-.75 0-.37.04-.75z" opacity={.4} />
    </IconBase>
  ))
);

CircleDivideAltRegularDuotone.displayName = 'CircleDivideAltRegularDuotone';

// Triple export pattern
export { CircleDivideAltRegularDuotone, CircleDivideAltRegularDuotone as CircleDivideAltRegularDuotoneIcon, CircleDivideAltRegularDuotone as SiCircleDivideAltRegularDuotone };
export default CircleDivideAltRegularDuotone;
export type { CircleDivideAltRegularDuotoneProps };
