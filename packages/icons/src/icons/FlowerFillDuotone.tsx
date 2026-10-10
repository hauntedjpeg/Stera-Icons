import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowerFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.9 4.06c1.04-.86 2.5-1.14 3.97-.31s1.96 2.22 1.72 3.55q-.11.63-.43 1.22.68.03 1.31.25c1.28.45 2.28 1.55 2.28 3.23s-1 2.78-2.28 3.23q-.63.22-1.3.25.3.59.42 1.22c.24 1.34-.25 2.72-1.72 3.55s-2.93.55-3.98-.3q-.51-.43-.9-1.02-.37.59-.88 1.01c-1.05.86-2.5 1.14-3.98.31-1.47-.83-1.96-2.21-1.72-3.55q.11-.63.43-1.22-.69-.03-1.31-.25c-1.28-.45-2.28-1.55-2.28-3.23s1-2.78 2.28-3.23q.62-.22 1.3-.25-.3-.59-.42-1.22c-.24-1.34.25-2.72 1.72-3.55s2.93-.55 3.98.3q.51.44.89 1.02.38-.59.9-1.01M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" opacity={.4} />
        <path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3" />
    </IconBase>
  ))
);

FlowerFillDuotone.displayName = 'FlowerFillDuotone';

// Triple export pattern
export { FlowerFillDuotone, FlowerFillDuotone as FlowerFillDuotoneIcon, FlowerFillDuotone as SiFlowerFillDuotone };
export default FlowerFillDuotone;
export type { FlowerFillDuotoneProps };
