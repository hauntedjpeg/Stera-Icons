import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudUploadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudUploadFillDuotone = memo(
  forwardRef<SVGSVGElement, CloudUploadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13c2.77 0 5.16 1.64 6.25 4 3.13.13 5.63 2.7 5.63 5.87 0 3.24-2.64 5.88-5.88 5.88h-5.12V13.1l2.5 2.5c.34.35.9.35 1.24 0 .34-.33.34-.89 0-1.23l-4-4c-.34-.34-.9-.34-1.24 0l-4 4c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2.5-2.5v6.76H5C2.3 19.88.13 17.68.13 15c0-2.7 2.18-4.87 4.87-4.87h.18c.43-3.39 3.32-6 6.82-6" opacity={.4} />
        <path d="M11.38 10.38c.34-.34.9-.34 1.24 0l4 4c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.5-2.5V20h-1.76v-6.89l-2.5 2.5c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23z" />
    </IconBase>
  ))
);

CloudUploadFillDuotone.displayName = 'CloudUploadFillDuotone';

// Triple export pattern
export { CloudUploadFillDuotone, CloudUploadFillDuotone as CloudUploadFillDuotoneIcon, CloudUploadFillDuotone as SiCloudUploadFillDuotone };
export default CloudUploadFillDuotone;
export type { CloudUploadFillDuotoneProps };
