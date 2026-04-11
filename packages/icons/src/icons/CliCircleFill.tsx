import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleFillProps = Omit<IconBaseProps, 'children'>;

const CliCircleFill = memo(
  forwardRef<SVGSVGElement, CliCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M8.62 8.38a.88.88 0 0 0-1.24 1.24L9.76 12l-2.38 2.38a.88.88 0 0 0 1.24 1.24l3-3a.9.9 0 0 0 0-1.24zm3.88 5.74a.88.88 0 0 0 0 1.76h4a.88.88 0 0 0 0-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

CliCircleFill.displayName = 'CliCircleFill';

// Triple export pattern (lucide-react style)
export { CliCircleFill, CliCircleFill as CliCircleFillIcon, CliCircleFill as SiCliCircleFill };
export default CliCircleFill;
export type { CliCircleFillProps };
