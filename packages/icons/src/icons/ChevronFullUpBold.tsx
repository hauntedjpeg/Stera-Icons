import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpBold = memo(
  forwardRef<SVGSVGElement, ChevronFullUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.3 7.3c.38-.4 1.02-.4 1.4 0l7 7c.3.28.38.7.22 1.08-.15.38-.52.62-.92.62H5c-.4 0-.77-.24-.92-.62-.16-.37-.07-.8.21-1.09zM7.4 14h9.18L12 9.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpBold.displayName = 'ChevronFullUpBold';

// Triple export pattern
export { ChevronFullUpBold, ChevronFullUpBold as ChevronFullUpBoldIcon, ChevronFullUpBold as SiChevronFullUpBold };
export default ChevronFullUpBold;
export type { ChevronFullUpBoldProps };
