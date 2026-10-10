import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeFillProps = Omit<IconBaseProps, 'children'>;

const KeyholeFill = memo(
  forwardRef<SVGSVGElement, KeyholeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c3.52 0 6.37 2.85 6.37 6.37 0 1.77-.72 3.37-1.88 4.52l2.57 5.14c.62 1.25-.28 2.72-1.68 2.72H6.62c-1.4 0-2.3-1.47-1.68-2.72l2.57-5.14c-1.16-1.15-1.89-2.75-1.89-4.52 0-3.52 2.86-6.37 6.38-6.37" />
    </IconBase>
  ))
);

KeyholeFill.displayName = 'KeyholeFill';

// Triple export pattern
export { KeyholeFill, KeyholeFill as KeyholeFillIcon, KeyholeFill as SiKeyholeFill };
export default KeyholeFill;
export type { KeyholeFillProps };
