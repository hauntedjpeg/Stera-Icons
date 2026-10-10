import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsRegularDuotone = memo(
  forwardRef<SVGSVGElement, StairsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.75 16.5c0 .41.34.75.75.75h.75v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75zM9.75 10.5c0 .41.34.75.75.75h.75v5.25c0-.41-.34-.75-.75-.75h-.75zM15.75 4.5c0 .41.34.75.75.75h.75v5.25c0-.41-.34-.75-.75-.75h-.75z" opacity={0.4} />
        <path d="M10.5 15.75c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM16.5 9.75c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21.5 3.75c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

StairsRegularDuotone.displayName = 'StairsRegularDuotone';

// Triple export pattern
export { StairsRegularDuotone, StairsRegularDuotone as StairsRegularDuotoneIcon, StairsRegularDuotone as SiStairsRegularDuotone };
export default StairsRegularDuotone;
export type { StairsRegularDuotoneProps };
