import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.97 12.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-2.72 2.72H20.5c.41 0 .75.34.75.75s-.34.75-.75.75H4.31l2.72 2.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4c-.27-.27-.3-.7-.05-1l.05-.06zM16.97 2.97c.3-.3.77-.3 1.06 0l4 4 .1.11q.12.2.12.42 0 .31-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.72-2.72H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.19l-2.72-2.72c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowsLeftRightRegular.displayName = 'ArrowsLeftRightRegular';

// Triple export pattern
export { ArrowsLeftRightRegular, ArrowsLeftRightRegular as ArrowsLeftRightRegularIcon, ArrowsLeftRightRegular as SiArrowsLeftRightRegular };
export default ArrowsLeftRightRegular;
export type { ArrowsLeftRightRegularProps };
