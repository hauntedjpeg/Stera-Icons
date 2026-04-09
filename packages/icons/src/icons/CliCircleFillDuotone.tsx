import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M8.62 8.38a.88.88 0 0 0-1.24 1.24L9.76 12l-2.38 2.38a.88.88 0 0 0 1.24 1.24l3-3a.9.9 0 0 0 0-1.24zm3.88 5.74a.88.88 0 0 0 0 1.75h4a.87.87 0 1 0 0-1.75z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 8.38a.9.9 0 0 1 1.24 0l3 3a.9.9 0 0 1 0 1.24l-3 3a.88.88 0 0 1-1.24-1.24L9.76 12 7.38 9.62a.9.9 0 0 1 0-1.24M16.5 14.12a.88.88 0 0 1 0 1.75h-4a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

CliCircleFillDuotone.displayName = 'CliCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CliCircleFillDuotone, CliCircleFillDuotone as CliCircleFillDuotoneIcon, CliCircleFillDuotone as SiCliCircleFillDuotone };
export default CliCircleFillDuotone;
export type { CliCircleFillDuotoneProps };
