import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.3 15.7q.3.3.7.3H5q.4 0 .7-.3L7.42 14h9.18z" opacity={.4} />
        <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 9.42l-6.3 6.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42z" />
    </IconBase>
  ))
);

ChevronFullUpBoldDuotone.displayName = 'ChevronFullUpBoldDuotone';

// Triple export pattern
export { ChevronFullUpBoldDuotone, ChevronFullUpBoldDuotone as ChevronFullUpBoldDuotoneIcon, ChevronFullUpBoldDuotone as SiChevronFullUpBoldDuotone };
export default ChevronFullUpBoldDuotone;
export type { ChevronFullUpBoldDuotoneProps };
