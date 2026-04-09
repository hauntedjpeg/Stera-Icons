import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-down-fill-duotone" {...props}>
      <path d="M14.5 4.88c.35 0 .63.27.63.62v5c0 .48.39.88.87.88h3.89L12.27 19a.4.4 0 0 1-.54 0l-7.62-7.62H8c.48 0 .88-.4.88-.88v-5c0-.35.27-.62.62-.62z" opacity={.4} />
        <path fillRule="evenodd" d="M14.5 3.13a2.37 2.37 0 0 1 2.37 2.37v4.13h3.92c1.23 0 1.84 1.48.98 2.34l-8.27 8.26c-.83.83-2.17.83-3 0l-8.27-8.26a1.38 1.38 0 0 1 .98-2.35h3.91V5.5A2.4 2.4 0 0 1 9.5 3.13zm-5 1.75a.63.63 0 0 0-.63.62v5c0 .48-.39.88-.87.88H4.11L11.73 19c.15.14.39.14.54 0l7.62-7.62H16a.9.9 0 0 1-.88-.88v-5a.6.6 0 0 0-.62-.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigDownFillDuotone.displayName = 'ArrowBigDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigDownFillDuotone, ArrowBigDownFillDuotone as ArrowBigDownFillDuotoneIcon, ArrowBigDownFillDuotone as SiArrowBigDownFillDuotone };
export default ArrowBigDownFillDuotone;
export type { ArrowBigDownFillDuotoneProps };
