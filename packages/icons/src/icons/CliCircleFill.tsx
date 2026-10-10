import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleFillProps = Omit<IconBaseProps, 'children'>;

const CliCircleFill = memo(
  forwardRef<SVGSVGElement, CliCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M8.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L9.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l3-3q.25-.26.26-.62-.01-.36-.26-.62zm3.88 5.74c-.48 0-.87.4-.87.88s.39.88.87.88h4c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

CliCircleFill.displayName = 'CliCircleFill';

// Triple export pattern
export { CliCircleFill, CliCircleFill as CliCircleFillIcon, CliCircleFill as SiCliCircleFill };
export default CliCircleFill;
export type { CliCircleFillProps };
