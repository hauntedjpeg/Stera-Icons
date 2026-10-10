import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.4 8.25c.89 0 1.33 1.08.7 1.7l-6.57 6.58q-.22.22-.53.22t-.53-.22L4.9 9.96c-.63-.63-.19-1.71.7-1.71zM12 14.94l5.19-5.19H6.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownRegular.displayName = 'ChevronFullDownRegular';

// Triple export pattern
export { ChevronFullDownRegular, ChevronFullDownRegular as ChevronFullDownRegularIcon, ChevronFullDownRegular as SiChevronFullDownRegular };
export default ChevronFullDownRegular;
export type { ChevronFullDownRegularProps };
