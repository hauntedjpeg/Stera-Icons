import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.01 15.93c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.9 1.9c-.3.3-.77.3-1.07 0-.29-.29-.29-.76 0-1.05zM15.92 15.93c.3-.3.77-.3 1.06 0l1.91 1.9c.3.3.3.77 0 1.07-.3.29-.77.29-1.06 0l-1.9-1.91c-.3-.3-.3-.77 0-1.06M5.1 5.1c.3-.29.77-.29 1.06 0l1.91 1.92c.3.29.3.76 0 1.06-.3.29-.77.29-1.06 0l-1.9-1.91c-.3-.3-.3-.77 0-1.06M17.83 5.1c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.07L17 8.07c-.3.3-.78.3-1.07 0-.3-.29-.3-.76 0-1.05z" opacity={0.4} />
        <path d="M12 17.55c.41 0 .75.34.75.75V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.7c0-.41.34-.75.75-.75M5.7 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-2.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 2.25c.41 0 .75.34.75.75v2.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SpinnerRegularDuotone.displayName = 'SpinnerRegularDuotone';

// Triple export pattern
export { SpinnerRegularDuotone, SpinnerRegularDuotone as SpinnerRegularDuotoneIcon, SpinnerRegularDuotone as SiSpinnerRegularDuotone };
export default SpinnerRegularDuotone;
export type { SpinnerRegularDuotoneProps };
