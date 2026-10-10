import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudUploadBoldProps = Omit<IconBaseProps, 'children'>;

const CloudUploadBold = memo(
  forwardRef<SVGSVGElement, CloudUploadBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4c2.8 0 5.2 1.64 6.33 4 3.16.18 5.67 2.8 5.67 6 0 3.31-2.69 6-6 6h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c2.2 0 4-1.8 4-4s-1.8-4-4-4l-.27.01c-.45.03-.86-.24-1.01-.67C16.03 7.4 14.18 6 12 6c-2.76 0-5 2.24-5 5v.1c0 .32-.13.62-.38.81-.24.2-.56.26-.87.18Q5.4 12 5 12c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c.55 0 1 .45 1 1s-.45 1-1 1H5c-2.76 0-5-2.24-5-5s2.24-5 5-5h.07c.49-3.4 3.4-6 6.93-6" />
        <path d="M11.3 10.3c.38-.4 1.02-.4 1.4 0l4 4c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 13.42V19c0 .55-.45 1-1 1s-1-.45-1-1v-5.59l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42z" />
    </IconBase>
  ))
);

CloudUploadBold.displayName = 'CloudUploadBold';

// Triple export pattern
export { CloudUploadBold, CloudUploadBold as CloudUploadBoldIcon, CloudUploadBold as SiCloudUploadBold };
export default CloudUploadBold;
export type { CloudUploadBoldProps };
