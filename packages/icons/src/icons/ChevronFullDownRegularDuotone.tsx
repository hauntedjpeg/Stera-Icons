import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 8.25q-.3 0-.53.22l-1.28 1.28H6.8L5.53 8.47Q5.3 8.25 5 8.25z" opacity={.4} />
        <path d="M18.47 8.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7q-.22.22-.53.22t-.53-.22l-7-7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 14.94z" />
    </IconBase>
  ))
);

ChevronFullDownRegularDuotone.displayName = 'ChevronFullDownRegularDuotone';

// Triple export pattern
export { ChevronFullDownRegularDuotone, ChevronFullDownRegularDuotone as ChevronFullDownRegularDuotoneIcon, ChevronFullDownRegularDuotone as SiChevronFullDownRegularDuotone };
export default ChevronFullDownRegularDuotone;
export type { ChevronFullDownRegularDuotoneProps };
