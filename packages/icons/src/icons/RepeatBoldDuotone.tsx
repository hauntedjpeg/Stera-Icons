import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RepeatBoldDuotone = memo(
  forwardRef<SVGSVGElement, RepeatBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.5c.55 0 1 .45 1 1V13c0 3.31-2.69 6-6 6H5.41l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-3-3q-.28-.28-.29-.7t.3-.7l3-3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L5.42 17H16c2.2 0 4-1.8 4-4v-1.5c0-.55.45-1 1-1" opacity={.4} />
        <path d="M17.3 2.3c.38-.4 1.02-.4 1.4 0l3 3q.3.28.3.7t-.3.7l-3 3c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4L18.58 7H8c-2.2 0-4 1.8-4 4v1.5c0 .55-.45 1-1 1s-1-.45-1-1V11c0-3.31 2.69-6 6-6h10.59l-1.3-1.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

RepeatBoldDuotone.displayName = 'RepeatBoldDuotone';

// Triple export pattern
export { RepeatBoldDuotone, RepeatBoldDuotone as RepeatBoldDuotoneIcon, RepeatBoldDuotone as SiRepeatBoldDuotone };
export default RepeatBoldDuotone;
export type { RepeatBoldDuotoneProps };
