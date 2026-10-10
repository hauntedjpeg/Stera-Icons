import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.47 7.47c.3-.3.77-.3 1.06 0l4 4q.22.22.22.53t-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.72-2.72H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.19l-2.72-2.72c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleRightRegular.displayName = 'ArrowCircleRightRegular';

// Triple export pattern
export { ArrowCircleRightRegular, ArrowCircleRightRegular as ArrowCircleRightRegularIcon, ArrowCircleRightRegular as SiArrowCircleRightRegular };
export default ArrowCircleRightRegular;
export type { ArrowCircleRightRegularProps };
