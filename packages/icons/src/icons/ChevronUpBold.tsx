import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronUpBold = memo(
  forwardRef<SVGSVGElement, ChevronUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 9.42l-6.3 6.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42z" />
    </IconBase>
  ))
);

ChevronUpBold.displayName = 'ChevronUpBold';

// Triple export pattern
export { ChevronUpBold, ChevronUpBold as ChevronUpBoldIcon, ChevronUpBold as SiChevronUpBold };
export default ChevronUpBold;
export type { ChevronUpBoldProps };
