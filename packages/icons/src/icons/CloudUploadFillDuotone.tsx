import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudUploadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudUploadFillDuotone = memo(
  forwardRef<SVGSVGElement, CloudUploadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13a6.9 6.9 0 0 1 6.25 4A5.87 5.87 0 0 1 18 19.88h-5.12V13.1l2.5 2.5a.88.88 0 0 0 1.24-1.23l-4-4a.9.9 0 0 0-1.24 0l-4 4a.88.88 0 0 0 1.24 1.24l2.5-2.5v6.76H5a4.87 4.87 0 1 1 0-9.75h.18c.43-3.39 3.32-6 6.82-6" opacity={.4} />
        <path d="M11.38 10.38a.9.9 0 0 1 1.24 0l4 4a.88.88 0 0 1-1.24 1.24l-2.5-2.5V20h-1.76v-6.89l-2.5 2.5a.88.88 0 0 1-1.24-1.23z" />
    </IconBase>
  ))
);

CloudUploadFillDuotone.displayName = 'CloudUploadFillDuotone';

// Triple export pattern (lucide-react style)
export { CloudUploadFillDuotone, CloudUploadFillDuotone as CloudUploadFillDuotoneIcon, CloudUploadFillDuotone as SiCloudUploadFillDuotone };
export default CloudUploadFillDuotone;
export type { CloudUploadFillDuotoneProps };
