import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CliCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M8.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L9.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l3-3q.24-.27.25-.62 0-.36-.25-.62zm3.88 5.74c-.48 0-.88.4-.88.88s.4.87.88.87h4c.48 0 .87-.39.87-.87s-.39-.88-.87-.88z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 8.38c.34-.34.9-.34 1.24 0l3 3q.25.26.25.62t-.25.62l-3 3c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L9.76 12 7.38 9.62c-.34-.34-.34-.9 0-1.24M16.5 14.12c.48 0 .87.4.87.88s-.39.87-.87.87h-4c-.48 0-.88-.39-.88-.87s.4-.88.88-.88z" />
    </IconBase>
  ))
);

CliCircleFillDuotone.displayName = 'CliCircleFillDuotone';

// Triple export pattern
export { CliCircleFillDuotone, CliCircleFillDuotone as CliCircleFillDuotoneIcon, CliCircleFillDuotone as SiCliCircleFillDuotone };
export default CliCircleFillDuotone;
export type { CliCircleFillDuotoneProps };
