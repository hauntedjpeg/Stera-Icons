import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudCliFillProps = Omit<IconBaseProps, 'children'>;

const CloudCliFill = memo(
  forwardRef<SVGSVGElement, CloudCliFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13a6.9 6.9 0 0 1 6.25 4A5.87 5.87 0 0 1 18 19.88H5a4.87 4.87 0 1 1 0-9.75h.18c.43-3.39 3.32-6 6.82-6m-1.38 5.25a.88.88 0 0 0-1.24 1.24L11.76 13l-2.38 2.38a.88.88 0 0 0 1.24 1.24l3-3a.9.9 0 0 0 0-1.24zm3.88 5.74a.88.88 0 0 0 0 1.76h4a.88.88 0 0 0 0-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudCliFill.displayName = 'CloudCliFill';

// Triple export pattern (lucide-react style)
export { CloudCliFill, CloudCliFill as CloudCliFillIcon, CloudCliFill as SiCloudCliFill };
export default CloudCliFill;
export type { CloudCliFillProps };
