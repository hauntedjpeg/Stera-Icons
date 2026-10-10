import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliRegularDuotone = memo(
  forwardRef<SVGSVGElement, CliRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.75c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M3.47 4.97c.3-.3.77-.3 1.06 0l6 6c.3.3.3.77 0 1.06l-6 6c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l5.47-5.47-5.47-5.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

CliRegularDuotone.displayName = 'CliRegularDuotone';

// Triple export pattern
export { CliRegularDuotone, CliRegularDuotone as CliRegularDuotoneIcon, CliRegularDuotone as SiCliRegularDuotone };
export default CliRegularDuotone;
export type { CliRegularDuotoneProps };
