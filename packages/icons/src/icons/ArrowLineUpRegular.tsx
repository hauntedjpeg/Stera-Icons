import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.25 3c0 .41.34.75.75.75h16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4c-.41 0-.75.34-.75.75M4.47 13.47c-.3.3-.3.77 0 1.06s.77.3 1.06 0l5.72-5.72V21c0 .41.34.75.75.75s.75-.34.75-.75V8.81l5.72 5.72c.3.3.77.3 1.06 0s.3-.77 0-1.06l-7-7c-.3-.3-.77-.3-1.06 0z" />
    </IconBase>
  ))
);

ArrowLineUpRegular.displayName = 'ArrowLineUpRegular';

// Triple export pattern
export { ArrowLineUpRegular, ArrowLineUpRegular as ArrowLineUpRegularIcon, ArrowLineUpRegular as SiArrowLineUpRegular };
export default ArrowLineUpRegular;
export type { ArrowLineUpRegularProps };
