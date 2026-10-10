import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MinusCircleBold = memo(
  forwardRef<SVGSVGElement, MinusCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 11c.55 0 1 .44 1 1 0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1 0-.56.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleBold.displayName = 'MinusCircleBold';

// Triple export pattern
export { MinusCircleBold, MinusCircleBold as MinusCircleBoldIcon, MinusCircleBold as SiMinusCircleBold };
export default MinusCircleBold;
export type { MinusCircleBoldProps };
