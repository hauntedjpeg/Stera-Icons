import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownBold = memo(
  forwardRef<SVGSVGElement, ArrowDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4c.55 0 1 .45 1 1v11.59l5.3-5.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-7 7c-.38.39-1.02.39-1.4 0l-7-7c-.4-.4-.4-1.03 0-1.42.38-.39 1.02-.39 1.4 0l5.3 5.3V5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowDownBold.displayName = 'ArrowDownBold';

// Triple export pattern
export { ArrowDownBold, ArrowDownBold as ArrowDownBoldIcon, ArrowDownBold as SiArrowDownBold };
export default ArrowDownBold;
export type { ArrowDownBoldProps };
