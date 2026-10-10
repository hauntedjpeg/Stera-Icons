import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AccessibilityRegularProps = Omit<IconBaseProps, 'children'>;

const AccessibilityRegular = memo(
  forwardRef<SVGSVGElement, AccessibilityRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.82 6.77c.4-.1.8.15.9.55s-.14.8-.54.9c-2.17.55-4.09.9-5.93 1.06v4.65l1.49 7.42c.08.4-.19.8-.6.89s-.8-.19-.88-.6L13 15.35c-.07-.34-.37-.59-.73-.59h-.54c-.36 0-.66.25-.73.6l-1.26 6.3c-.09.4-.48.67-.89.59-.4-.09-.67-.48-.59-.89l1.49-7.42V9.28c-1.85-.16-3.76-.51-5.93-1.05-.4-.1-.65-.51-.55-.91s.51-.65.91-.55c5.88 1.47 9.76 1.47 15.64 0M12 1.75c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25" />
    </IconBase>
  ))
);

AccessibilityRegular.displayName = 'AccessibilityRegular';

// Triple export pattern
export { AccessibilityRegular, AccessibilityRegular as AccessibilityRegularIcon, AccessibilityRegular as SiAccessibilityRegular };
export default AccessibilityRegular;
export type { AccessibilityRegularProps };
