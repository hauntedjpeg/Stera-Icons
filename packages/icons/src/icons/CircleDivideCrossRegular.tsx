import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m-8.21 10.5c.35 3.96 3.5 7.1 7.46 7.46v-7.46zm8.96 0v7.46c3.96-.35 7.1-3.5 7.46-7.46zm0-1.5h7.46c-.35-3.96-3.5-7.1-7.46-7.46zm-1.5-7.46c-3.96.35-7.1 3.5-7.46 7.46h7.46z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossRegular.displayName = 'CircleDivideCrossRegular';

// Triple export pattern
export { CircleDivideCrossRegular, CircleDivideCrossRegular as CircleDivideCrossRegularIcon, CircleDivideCrossRegular as SiCircleDivideCrossRegular };
export default CircleDivideCrossRegular;
export type { CircleDivideCrossRegularProps };
