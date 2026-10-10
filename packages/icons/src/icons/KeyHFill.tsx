import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyHFillProps = Omit<IconBaseProps, 'children'>;

const KeyHFill = memo(
  forwardRef<SVGSVGElement, KeyHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 6.5c3.04 0 5.5 2.46 5.5 5.5s-2.46 5.5-5.5 5.5c-2.14 0-3.99-1.22-4.9-3H9.7l-1.75 1.76-.35-.46-1.15-1.54L5 15.71 1.3 12l2.5-2.5h8.3c.91-1.78 2.76-3 4.9-3m1.5 4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S20 12.83 20 12s-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyHFill.displayName = 'KeyHFill';

// Triple export pattern
export { KeyHFill, KeyHFill as KeyHFillIcon, KeyHFill as SiKeyHFill };
export default KeyHFill;
export type { KeyHFillProps };
