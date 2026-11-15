import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.44 4.8c.25-2.05 2.12-3.51 4.18-3.26l8.6 1.06c2.05.25 3.52 2.12 3.26 4.18l-1.05 8.6c-.19 1.51-1.25 2.7-2.62 3.12q.14-.64.06-1.3L17.8 8.6c-.27-2.2-2.26-3.76-4.46-3.49l-7.06.87z" opacity={.4} />
        <path fillRule="evenodd" d="M13.35 5.11c2.2-.27 4.2 1.3 4.46 3.48l1.06 8.6c.27 2.2-1.3 4.2-3.48 4.46l-8.6 1.06c-2.2.27-4.2-1.3-4.46-3.48l-1.06-8.6C1 8.42 2.56 6.42 4.75 6.16zm-4.78 9.55c-.87-.68-2.13-.53-2.8.34l-1.9 2.43.2 1.58c.14 1.24 1.27 2.11 2.5 1.96l8.6-1.05.1-.02zm3.35-5.06c-1 .12-1.72 1.04-1.6 2.04s1.04 1.72 2.04 1.6c1-.13 1.72-1.04 1.6-2.05s-1.04-1.72-2.04-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFillDuotone.displayName = 'ImagePileFillDuotone';

// Triple export pattern
export { ImagePileFillDuotone, ImagePileFillDuotone as ImagePileFillDuotoneIcon, ImagePileFillDuotone as SiImagePileFillDuotone };
export default ImagePileFillDuotone;
export type { ImagePileFillDuotoneProps };
