import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 5.13c4.63 0 8.38 3.74 8.38 8.37s-3.75 8.38-8.38 8.38-8.37-3.75-8.37-8.38c0-.48.39-.87.87-.87s.88.39.88.87c0 3.66 2.96 6.63 6.62 6.63s6.63-2.97 6.63-6.63S15.66 6.88 12 6.88h-.62V5.13z" opacity={.4} />
        <path d="M9.88 1.88c.25-.25.63-.32.96-.19.32.14.53.46.54.81v7c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-3.5-3.5q-.25-.26-.25-.62t.25-.62z" />
    </IconBase>
  ))
);

RotateLeftFillDuotone.displayName = 'RotateLeftFillDuotone';

// Triple export pattern
export { RotateLeftFillDuotone, RotateLeftFillDuotone as RotateLeftFillDuotoneIcon, RotateLeftFillDuotone as SiRotateLeftFillDuotone };
export default RotateLeftFillDuotone;
export type { RotateLeftFillDuotoneProps };
