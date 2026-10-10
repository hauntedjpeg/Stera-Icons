import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4c.55 0 1 .45 1 1v11.59l-1 1-1-1V5c0-.55.45-1 1-1" opacity={.4} />
        <path d="M18.3 11.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0l-7-7c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l6.3 6.29z" />
    </IconBase>
  ))
);

ArrowDownBoldDuotone.displayName = 'ArrowDownBoldDuotone';

// Triple export pattern
export { ArrowDownBoldDuotone, ArrowDownBoldDuotone as ArrowDownBoldDuotoneIcon, ArrowDownBoldDuotone as SiArrowDownBoldDuotone };
export default ArrowDownBoldDuotone;
export type { ArrowDownBoldDuotoneProps };
