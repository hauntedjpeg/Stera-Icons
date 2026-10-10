import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.31 4.8c.26-2.13 2.2-3.64 4.32-3.38l8.6 1.05c2.13.26 3.64 2.2 3.38 4.32l-1.06 8.6c-.2 1.6-1.32 2.84-2.77 3.25q.17-.7.09-1.44L17.8 8.6c-.27-2.2-2.26-3.76-4.46-3.49l-7.18.88z" opacity={.4} />
        <path fillRule="evenodd" d="M13.35 5.11c2.2-.27 4.2 1.3 4.46 3.48l1.06 8.6c.27 2.2-1.3 4.2-3.48 4.46l-8.6 1.06c-2.2.27-4.2-1.3-4.46-3.48l-1.06-8.6C1 8.42 2.56 6.42 4.75 6.16zm-4.7 9.45c-.93-.72-2.26-.56-2.99.37l-1.7 2.18.23 1.89c.14 1.16 1.2 2 2.36 1.85l8.6-1.06.16-.02zm3.27-4.96c-1 .12-1.72 1.04-1.6 2.04s1.04 1.72 2.04 1.6c1-.13 1.72-1.04 1.6-2.05s-1.04-1.72-2.04-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFillDuotone.displayName = 'ImagePileFillDuotone';

// Triple export pattern
export { ImagePileFillDuotone, ImagePileFillDuotone as ImagePileFillDuotoneIcon, ImagePileFillDuotone as SiImagePileFillDuotone };
export default ImagePileFillDuotone;
export type { ImagePileFillDuotoneProps };
