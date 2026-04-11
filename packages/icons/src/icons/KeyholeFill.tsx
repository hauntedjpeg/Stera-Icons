import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeFillProps = Omit<IconBaseProps, 'children'>;

const KeyholeFill = memo(
  forwardRef<SVGSVGElement, KeyholeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13a6.38 6.38 0 0 1 4.49 10.9l2.57 5.13a1.88 1.88 0 0 1-1.68 2.72H6.62c-1.4 0-2.3-1.47-1.68-2.72l2.57-5.14A6.36 6.36 0 0 1 12 2.12" />
    </IconBase>
  ))
);

KeyholeFill.displayName = 'KeyholeFill';

// Triple export pattern (lucide-react style)
export { KeyholeFill, KeyholeFill as KeyholeFillIcon, KeyholeFill as SiKeyholeFill };
export default KeyholeFill;
export type { KeyholeFillProps };
