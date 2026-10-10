import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.47 7.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 9.06l-6.47 6.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ChevronUpRegular.displayName = 'ChevronUpRegular';

// Triple export pattern
export { ChevronUpRegular, ChevronUpRegular as ChevronUpRegularIcon, ChevronUpRegular as SiChevronUpRegular };
export default ChevronUpRegular;
export type { ChevronUpRegularProps };
