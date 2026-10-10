import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AccessibilityFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AccessibilityFillDuotone = memo(
  forwardRef<SVGSVGElement, AccessibilityFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.25c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path d="M2.55 6.89c.2-.8 1.01-1.3 1.81-1.1 5.77 1.44 9.52 1.44 15.28 0 .8-.2 1.61.3 1.82 1.1s-.3 1.61-1.1 1.81c-1.94.49-3.68.82-5.36 1v3.9l1.47 7.36c.16.8-.36 1.6-1.18 1.76-.8.16-1.6-.36-1.76-1.18l-1.26-6.29h-.54l-1.26 6.3c-.16.8-.95 1.33-1.76 1.17s-1.34-.95-1.18-1.76L9 13.6V9.7c-1.68-.18-3.42-.51-5.36-1-.8-.2-1.3-1.01-1.1-1.81" opacity={.4} />
    </IconBase>
  ))
);

AccessibilityFillDuotone.displayName = 'AccessibilityFillDuotone';

// Triple export pattern
export { AccessibilityFillDuotone, AccessibilityFillDuotone as AccessibilityFillDuotoneIcon, AccessibilityFillDuotone as SiAccessibilityFillDuotone };
export default AccessibilityFillDuotone;
export type { AccessibilityFillDuotoneProps };
