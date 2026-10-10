import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 9.75c.41 0 .75.34.75.75s-.34.75-.75.75H3.81l7.84 7.84c.2.2.5.2.7 0l7.84-7.84H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.8c1.1 0 1.66 1.35.88 2.13l-8.27 8.27c-.78.78-2.04.78-2.82 0l-8.27-8.27c-.78-.78-.23-2.13.89-2.13z" />
        <path d="M14.5 3.25c1.24 0 2.25 1 2.25 2.25v4.25H16c-.41 0-.75.34-.75.75v-5c0-.41-.34-.75-.75-.75h-5c-.41 0-.75.34-.75.75v5c0-.41-.34-.75-.75-.75h-.75V5.5c0-1.24 1-2.25 2.25-2.25z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigDownRegularDuotone.displayName = 'ArrowBigDownRegularDuotone';

// Triple export pattern
export { ArrowBigDownRegularDuotone, ArrowBigDownRegularDuotone as ArrowBigDownRegularDuotoneIcon, ArrowBigDownRegularDuotone as SiArrowBigDownRegularDuotone };
export default ArrowBigDownRegularDuotone;
export type { ArrowBigDownRegularDuotoneProps };
