import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudXFillProps = Omit<IconBaseProps, 'children'>;

const CloudXFill = memo(
  forwardRef<SVGSVGElement, CloudXFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-x-fill" {...props}>
      <path fillRule="evenodd" d="M12 4.13a6.9 6.9 0 0 1 6.25 4A5.87 5.87 0 0 1 18 19.88H5a4.87 4.87 0 1 1 0-9.75h.18c.43-3.39 3.32-6 6.82-6m2.62 6.25a.9.9 0 0 0-1.24 0L12 11.76l-1.38-1.38a.88.88 0 0 0-1.24 1.24L10.76 13l-1.38 1.38a.88.88 0 0 0 1.24 1.24L12 14.24l1.38 1.38a.88.88 0 0 0 1.24-1.24L13.24 13l1.38-1.38a.9.9 0 0 0 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudXFill.displayName = 'CloudXFill';

// Triple export pattern (lucide-react style)
export { CloudXFill, CloudXFill as CloudXFillIcon, CloudXFill as SiCloudXFill };
export default CloudXFill;
export type { CloudXFillProps };
