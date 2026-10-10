import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.47 8.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7q-.22.22-.53.22t-.53-.22l-7-7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 14.94z" />
    </IconBase>
  ))
);

ChevronDownRegular.displayName = 'ChevronDownRegular';

// Triple export pattern
export { ChevronDownRegular, ChevronDownRegular as ChevronDownRegularIcon, ChevronDownRegular as SiChevronDownRegular };
export default ChevronDownRegular;
export type { ChevronDownRegularProps };
