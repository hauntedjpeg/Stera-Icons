import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.83 8.42c.41 0 .75.34.75.75v5.66q0 .31-.22.53-.22.21-.53.22H9.17c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h3.85L8.64 9.7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l4.38 4.38V9.17c0-.41.33-.75.75-.75" />
        <path fillRule="evenodd" d="M5.1 5.1c3.81-3.8 9.99-3.8 13.8 0 3.8 3.81 3.8 9.99 0 13.8-3.81 3.8-9.99 3.8-13.8 0-3.8-3.81-3.8-9.99 0-13.8m12.73 1.07c-3.22-3.23-8.44-3.23-11.66 0s-3.23 8.44 0 11.66 8.44 3.23 11.66 0 3.23-8.44 0-11.66" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownRightRegular.displayName = 'ArrowCircleDownRightRegular';

// Triple export pattern
export { ArrowCircleDownRightRegular, ArrowCircleDownRightRegular as ArrowCircleDownRightRegularIcon, ArrowCircleDownRightRegular as SiArrowCircleDownRightRegular };
export default ArrowCircleDownRightRegular;
export type { ArrowCircleDownRightRegularProps };
