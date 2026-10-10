import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleRegularProps = Omit<IconBaseProps, 'children'>;

const MinusCircleRegular = memo(
  forwardRef<SVGSVGElement, MinusCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 11.25c.41 0 .75.33.75.75 0 .41-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleRegular.displayName = 'MinusCircleRegular';

// Triple export pattern
export { MinusCircleRegular, MinusCircleRegular as MinusCircleRegularIcon, MinusCircleRegular as SiMinusCircleRegular };
export default MinusCircleRegular;
export type { MinusCircleRegularProps };
