import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronDownBold = memo(
  forwardRef<SVGSVGElement, ChevronDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.3 8.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7q-.28.3-.7.3t-.7-.3l-7-7c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronDownBold.displayName = 'ChevronDownBold';

// Triple export pattern
export { ChevronDownBold, ChevronDownBold as ChevronDownBoldIcon, ChevronDownBold as SiChevronDownBold };
export default ChevronDownBold;
export type { ChevronDownBoldProps };
