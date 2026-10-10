import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.47 7.47c.3-.3.77-.3 1.06 0l7 7c.21.21.28.54.16.82-.11.28-.39.46-.69.46H5c-.3 0-.58-.18-.7-.46s-.04-.6.17-.82zm-4.66 6.78h10.38L12 9.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpRegular.displayName = 'ChevronFullUpRegular';

// Triple export pattern
export { ChevronFullUpRegular, ChevronFullUpRegular as ChevronFullUpRegularIcon, ChevronFullUpRegular as SiChevronFullUpRegular };
export default ChevronFullUpRegular;
export type { ChevronFullUpRegularProps };
