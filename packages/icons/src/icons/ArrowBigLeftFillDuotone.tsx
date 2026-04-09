import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-left-fill-duotone" {...props}>
      <path d="M12.62 8c0 .48.4.87.88.88h5c.34 0 .62.27.62.62v5c0 .35-.28.63-.62.63h-5c-.48 0-.88.39-.88.87v3.89L5 12.27a.4.4 0 0 1 0-.54l7.62-7.62z" opacity={.4} />
        <path fillRule="evenodd" d="M12.03 2.23a1.38 1.38 0 0 1 2.34.98v3.91h4.13a2.4 2.4 0 0 1 2.37 2.38v5a2.37 2.37 0 0 1-2.37 2.37h-4.13v3.92a1.38 1.38 0 0 1-2.34.98L3.77 13.5a2.13 2.13 0 0 1 0-3zM5 11.73a.4.4 0 0 0 0 .54l7.62 7.62V16c0-.48.4-.87.88-.88h5c.34 0 .62-.27.62-.62v-5a.63.63 0 0 0-.62-.63h-5a.9.9 0 0 1-.88-.87V4.11z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigLeftFillDuotone.displayName = 'ArrowBigLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftFillDuotone, ArrowBigLeftFillDuotone as ArrowBigLeftFillDuotoneIcon, ArrowBigLeftFillDuotone as SiArrowBigLeftFillDuotone };
export default ArrowBigLeftFillDuotone;
export type { ArrowBigLeftFillDuotoneProps };
