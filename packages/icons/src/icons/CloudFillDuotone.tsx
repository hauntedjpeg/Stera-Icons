import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudFillDuotone = memo(
  forwardRef<SVGSVGElement, CloudFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-fill-duotone" {...props}>
      <path d="M12 5.88a5.1 5.1 0 0 1 4.84 3.42c.13.37.49.61.88.59l.28-.02a4.12 4.12 0 1 1 0 8.26H5a3.12 3.12 0 1 1 .78-6.16.88.88 0 0 0 1.1-.86V11c0-2.83 2.29-5.12 5.12-5.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 4.13a6.9 6.9 0 0 1 6.25 4A5.87 5.87 0 0 1 18 19.88H5a4.87 4.87 0 1 1 0-9.75h.18c.43-3.39 3.32-6 6.82-6m0 1.75A5.1 5.1 0 0 0 6.88 11v.1a.88.88 0 0 1-1.1.87A3.13 3.13 0 0 0 1.88 15c0 1.73 1.4 3.13 3.12 3.13h13a4.12 4.12 0 1 0-.28-8.24.9.9 0 0 1-.88-.59c-.7-2-2.6-3.43-4.84-3.43" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudFillDuotone.displayName = 'CloudFillDuotone';

// Triple export pattern (lucide-react style)
export { CloudFillDuotone, CloudFillDuotone as CloudFillDuotoneIcon, CloudFillDuotone as SiCloudFillDuotone };
export default CloudFillDuotone;
export type { CloudFillDuotoneProps };
