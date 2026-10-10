import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 16.75c.41 0 .75.34.75.75s-.34.75-.75.75H4.31l-.75-.75.75-.75zM20.44 7.5l-.75.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.19z" opacity={0.4} />
        <path d="M5.97 12.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06L3.56 17.5l3.47 3.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4c-.3-.3-.3-.77 0-1.06zM16.97 2.97c.3-.3.77-.3 1.06 0l4 4q.21.22.22.53 0 .31-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.47-3.47-3.47-3.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowsLeftRightRegularDuotone.displayName = 'ArrowsLeftRightRegularDuotone';

// Triple export pattern
export { ArrowsLeftRightRegularDuotone, ArrowsLeftRightRegularDuotone as ArrowsLeftRightRegularDuotoneIcon, ArrowsLeftRightRegularDuotone as SiArrowsLeftRightRegularDuotone };
export default ArrowsLeftRightRegularDuotone;
export type { ArrowsLeftRightRegularDuotoneProps };
