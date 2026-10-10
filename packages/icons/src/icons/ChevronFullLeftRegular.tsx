import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.47 4.47c.21-.21.54-.28.82-.16.28.11.46.39.46.69v14c0 .3-.18.58-.46.7-.28.1-.6.04-.82-.17l-7-7q-.21-.22-.22-.53 0-.31.22-.53zM9.07 12l5.18 5.19V6.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullLeftRegular.displayName = 'ChevronFullLeftRegular';

// Triple export pattern
export { ChevronFullLeftRegular, ChevronFullLeftRegular as ChevronFullLeftRegularIcon, ChevronFullLeftRegular as SiChevronFullLeftRegular };
export default ChevronFullLeftRegular;
export type { ChevronFullLeftRegularProps };
