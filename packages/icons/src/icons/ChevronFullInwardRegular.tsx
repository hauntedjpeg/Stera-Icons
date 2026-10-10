import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.47 14.47c.3-.3.77-.3 1.06 0l6 6c.21.21.28.54.16.82-.11.28-.39.46-.69.46H6c-.3 0-.58-.18-.7-.46s-.04-.6.17-.82zm-3.66 5.78h8.38L12 16.06zM18 2.25c.3 0 .58.18.7.46.1.28.04.6-.17.82l-6 6c-.3.3-.77.3-1.06 0l-6-6c-.21-.21-.28-.54-.16-.82.11-.28.39-.46.69-.46zm-6 5.69 4.19-4.19H7.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullInwardRegular.displayName = 'ChevronFullInwardRegular';

// Triple export pattern
export { ChevronFullInwardRegular, ChevronFullInwardRegular as ChevronFullInwardRegularIcon, ChevronFullInwardRegular as SiChevronFullInwardRegular };
export default ChevronFullInwardRegular;
export type { ChevronFullInwardRegularProps };
