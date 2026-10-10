import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AccessibilityBoldProps = Omit<IconBaseProps, 'children'>;

const AccessibilityBold = memo(
  forwardRef<SVGSVGElement, AccessibilityBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.76 6.53c.53-.13 1.08.2 1.21.73s-.2 1.08-.73 1.21c-2.09.52-3.95.87-5.74 1.03v4.35l.01.1 1.47 7.35.02.1c.04.51-.3.98-.8 1.08-.54.1-1.07-.24-1.18-.78l-1.26-6.3q-.08-.32-.4-.4h-.63c-.24 0-.44.17-.5.4l-1.25 6.3c-.1.54-.63.89-1.18.78-.5-.1-.84-.57-.8-1.07l.02-.1 1.47-7.36.01-.1V9.5C7.71 9.34 5.85 9 3.76 8.47c-.54-.13-.86-.68-.73-1.21.13-.54.68-.86 1.21-.73 5.84 1.46 9.68 1.46 15.52 0" />
        <path d="M12 1.5c1.38 0 2.5 1.12 2.5 2.5S13.38 6.5 12 6.5 9.5 5.38 9.5 4s1.12-2.5 2.5-2.5" />
    </IconBase>
  ))
);

AccessibilityBold.displayName = 'AccessibilityBold';

// Triple export pattern
export { AccessibilityBold, AccessibilityBold as AccessibilityBoldIcon, AccessibilityBold as SiAccessibilityBold };
export default AccessibilityBold;
export type { AccessibilityBoldProps };
