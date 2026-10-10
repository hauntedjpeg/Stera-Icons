import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullOutwardRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 15.25c.3 0 .58.18.7.46.1.28.04.6-.17.82l-6 6c-.3.3-.77.3-1.06 0l-6-6c-.21-.21-.28-.54-.16-.82.11-.28.39-.46.69-.46zm-6 5.69 4.19-4.19H7.8zM11.47 1.47c.3-.3.77-.3 1.06 0l6 6c.21.21.28.54.16.82-.11.28-.39.46-.69.46H6c-.3 0-.58-.18-.7-.46s-.04-.6.17-.82zM7.81 7.25h8.38L12 3.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullOutwardRegular.displayName = 'ChevronFullOutwardRegular';

// Triple export pattern
export { ChevronFullOutwardRegular, ChevronFullOutwardRegular as ChevronFullOutwardRegularIcon, ChevronFullOutwardRegular as SiChevronFullOutwardRegular };
export default ChevronFullOutwardRegular;
export type { ChevronFullOutwardRegularProps };
