import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3.25c-.41 0-.75.34-.75.75v16c0 .41.34.75.75.75s.75-.34.75-.75V4c0-.41-.34-.75-.75-.75M10.53 4.47c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06l5.72 5.72H3c-.41 0-.75.34-.75.75s.34.75.75.75h12.19l-5.72 5.72c-.3.3-.3.77 0 1.06s.77.3 1.06 0l7-7c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ArrowLineRightRegular.displayName = 'ArrowLineRightRegular';

// Triple export pattern
export { ArrowLineRightRegular, ArrowLineRightRegular as ArrowLineRightRegularIcon, ArrowLineRightRegular as SiArrowLineRightRegular };
export default ArrowLineRightRegular;
export type { ArrowLineRightRegularProps };
