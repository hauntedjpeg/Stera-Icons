import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudFillProps = Omit<IconBaseProps, 'children'>;

const CloudFill = memo(
  forwardRef<SVGSVGElement, CloudFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13c2.77 0 5.16 1.64 6.25 4 3.13.13 5.63 2.7 5.63 5.87 0 3.24-2.64 5.88-5.88 5.88H5C2.3 19.88.13 17.68.13 15c0-2.7 2.18-4.87 4.87-4.87h.18c.43-3.39 3.32-6 6.82-6" />
    </IconBase>
  ))
);

CloudFill.displayName = 'CloudFill';

// Triple export pattern
export { CloudFill, CloudFill as CloudFillIcon, CloudFill as SiCloudFill };
export default CloudFill;
export type { CloudFillProps };
