import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.89 14.12H7.1L12 9.24z" opacity={.4} />
        <path fillRule="evenodd" d="M11.38 7.38c.34-.34.9-.34 1.24 0l7 7c.25.25.32.63.19.95-.14.33-.46.54-.81.54H5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95zm-4.27 6.74h9.78L12 9.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpFillDuotone.displayName = 'ChevronFullUpFillDuotone';

// Triple export pattern
export { ChevronFullUpFillDuotone, ChevronFullUpFillDuotone as ChevronFullUpFillDuotoneIcon, ChevronFullUpFillDuotone as SiChevronFullUpFillDuotone };
export default ChevronFullUpFillDuotone;
export type { ChevronFullUpFillDuotoneProps };
