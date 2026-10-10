import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudFillDuotone = memo(
  forwardRef<SVGSVGElement, CloudFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 5.88c2.23 0 4.13 1.43 4.84 3.42.13.37.49.61.88.59l.28-.02c2.28 0 4.13 1.85 4.13 4.13s-1.85 4.13-4.13 4.13H5c-1.73 0-3.12-1.4-3.12-3.13s1.4-3.12 3.12-3.12q.41 0 .78.1.42.09.77-.17c.21-.17.33-.43.33-.7V11c0-2.83 2.29-5.12 5.12-5.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 4.13c2.77 0 5.16 1.64 6.25 4 3.13.13 5.63 2.7 5.63 5.87 0 3.24-2.64 5.88-5.88 5.88H5C2.3 19.88.13 17.68.13 15c0-2.7 2.18-4.87 4.87-4.87h.18c.43-3.39 3.32-6 6.82-6m0 1.75c-2.83 0-5.12 2.29-5.12 5.12v.1q0 .44-.33.71-.35.26-.77.16-.36-.1-.78-.1c-1.73 0-3.12 1.4-3.12 3.13s1.4 3.13 3.12 3.13h13c2.28 0 4.13-1.85 4.13-4.13S20.27 9.88 18 9.88h-.28c-.4.03-.75-.2-.88-.58-.7-2-2.6-3.43-4.84-3.43" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudFillDuotone.displayName = 'CloudFillDuotone';

// Triple export pattern
export { CloudFillDuotone, CloudFillDuotone as CloudFillDuotoneIcon, CloudFillDuotone as SiCloudFillDuotone };
export default CloudFillDuotone;
export type { CloudFillDuotoneProps };
