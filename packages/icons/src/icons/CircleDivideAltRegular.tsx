import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m-8.21 10.5c.38 4.2 3.9 7.5 8.21 7.5 4.3 0 7.84-3.3 8.21-7.5zm8.21-9c-4.3 0-7.83 3.3-8.21 7.5H20.2c-.37-4.2-3.9-7.5-8.21-7.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideAltRegular.displayName = 'CircleDivideAltRegular';

// Triple export pattern
export { CircleDivideAltRegular, CircleDivideAltRegular as CircleDivideAltRegularIcon, CircleDivideAltRegular as SiCircleDivideAltRegular };
export default CircleDivideAltRegular;
export type { CircleDivideAltRegularProps };
