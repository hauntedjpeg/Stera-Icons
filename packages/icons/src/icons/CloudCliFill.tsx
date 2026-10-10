import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudCliFillProps = Omit<IconBaseProps, 'children'>;

const CloudCliFill = memo(
  forwardRef<SVGSVGElement, CloudCliFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13c2.77 0 5.16 1.64 6.25 4 3.13.13 5.63 2.7 5.63 5.87 0 3.24-2.64 5.88-5.88 5.88H5C2.3 19.88.13 17.68.13 15c0-2.7 2.18-4.87 4.87-4.87h.18c.43-3.39 3.32-6 6.82-6m-1.38 5.25c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L11.76 13l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l3-3q.25-.26.26-.62-.01-.36-.26-.62zm3.88 5.74c-.48 0-.87.4-.87.88s.39.88.87.88h4c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudCliFill.displayName = 'CloudCliFill';

// Triple export pattern
export { CloudCliFill, CloudCliFill as CloudCliFillIcon, CloudCliFill as SiCloudCliFill };
export default CloudCliFill;
export type { CloudCliFillProps };
