import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudFillProps = Omit<IconBaseProps, 'children'>;

const CloudFill = memo(
  forwardRef<SVGSVGElement, CloudFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13a6.9 6.9 0 0 1 6.25 4A5.87 5.87 0 0 1 18 19.88H5a4.87 4.87 0 1 1 0-9.75h.18c.43-3.39 3.32-6 6.82-6" />
    </IconBase>
  ))
);

CloudFill.displayName = 'CloudFill';

// Triple export pattern (lucide-react style)
export { CloudFill, CloudFill as CloudFillIcon, CloudFill as SiCloudFill };
export default CloudFill;
export type { CloudFillProps };
