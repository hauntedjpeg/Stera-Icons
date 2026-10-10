import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7c.55 0 1 .45 1 1v5.59l2.3-2.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-4 4q-.28.28-.7.29t-.7-.3l-4-4c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l2.3 2.29V8c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownBold.displayName = 'ArrowCircleDownBold';

// Triple export pattern
export { ArrowCircleDownBold, ArrowCircleDownBold as ArrowCircleDownBoldIcon, ArrowCircleDownBold as SiArrowCircleDownBold };
export default ArrowCircleDownBold;
export type { ArrowCircleDownBoldProps };
