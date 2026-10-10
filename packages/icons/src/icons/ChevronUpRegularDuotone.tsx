import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.53 7.47 7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 9.06l.53-.53c.3-.3.3-.77 0-1.06" opacity={.4} />
        <path d="M11.47 7.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ChevronUpRegularDuotone.displayName = 'ChevronUpRegularDuotone';

// Triple export pattern
export { ChevronUpRegularDuotone, ChevronUpRegularDuotone as ChevronUpRegularDuotoneIcon, ChevronUpRegularDuotone as SiChevronUpRegularDuotone };
export default ChevronUpRegularDuotone;
export type { ChevronUpRegularDuotoneProps };
