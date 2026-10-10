import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m-.75 1.54c-4.2.37-7.5 3.9-7.5 8.21 0 4.3 3.3 7.83 7.5 8.21zm1.5 16.42c4.2-.38 7.5-3.9 7.5-8.21 0-4.3-3.3-7.84-7.5-8.21z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideRegular.displayName = 'CircleDivideRegular';

// Triple export pattern
export { CircleDivideRegular, CircleDivideRegular as CircleDivideRegularIcon, CircleDivideRegular as SiCircleDivideRegular };
export default CircleDivideRegular;
export type { CircleDivideRegularProps };
