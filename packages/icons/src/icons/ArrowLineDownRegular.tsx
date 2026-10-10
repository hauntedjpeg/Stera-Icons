import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 20.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 2.25c.41 0 .75.34.75.75v12.19l5.72-5.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0l-7-7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l5.72 5.72V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowLineDownRegular.displayName = 'ArrowLineDownRegular';

// Triple export pattern
export { ArrowLineDownRegular, ArrowLineDownRegular as ArrowLineDownRegularIcon, ArrowLineDownRegular as SiArrowLineDownRegular };
export default ArrowLineDownRegular;
export type { ArrowLineDownRegularProps };
