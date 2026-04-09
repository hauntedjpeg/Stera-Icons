import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-pile-fill-duotone" {...props}>
      <path d="M6.31 4.8a3.9 3.9 0 0 1 4.32-3.38l8.6 1.05a3.87 3.87 0 0 1 3.38 4.32l-1.06 8.6a3.9 3.9 0 0 1-2.77 3.25 4 4 0 0 0 .09-1.44l-.06-.47c.54-.32.92-.88 1-1.55l1.06-8.6a2.13 2.13 0 0 0-1.85-2.37l-8.6-1.06A2.13 2.13 0 0 0 8.05 5l-.1.77L6.18 6z" opacity={.4} />
        <path fillRule="evenodd" d="M13.35 5.11a4 4 0 0 1 4.46 3.48l1.06 8.6a4 4 0 0 1-3.48 4.46l-8.6 1.06a4 4 0 0 1-4.46-3.48l-1.06-8.6a4 4 0 0 1 3.48-4.46zm-4.7 9.45a2.13 2.13 0 0 0-2.99.37l-1.7 2.18.23 1.89c.14 1.16 1.2 2 2.36 1.85l8.6-1.06.16-.02zm3.27-4.96a1.83 1.83 0 1 0 .45 3.64 1.83 1.83 0 0 0-.45-3.64" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFillDuotone.displayName = 'ImagePileFillDuotone';

// Triple export pattern (lucide-react style)
export { ImagePileFillDuotone, ImagePileFillDuotone as ImagePileFillDuotoneIcon, ImagePileFillDuotone as SiImagePileFillDuotone };
export default ImagePileFillDuotone;
export type { ImagePileFillDuotoneProps };
