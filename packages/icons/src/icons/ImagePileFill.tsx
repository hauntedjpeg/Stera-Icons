import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileFillProps = Omit<IconBaseProps, 'children'>;

const ImagePileFill = memo(
  forwardRef<SVGSVGElement, ImagePileFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-pile-fill" {...props}>
      <path fillRule="evenodd" d="M6.31 4.8a3.9 3.9 0 0 1 4.32-3.38l8.6 1.05a3.9 3.9 0 0 1 3.38 4.32l-1.06 8.6a3.9 3.9 0 0 1-2.77 3.25 4 4 0 0 1-3.4 3.01l-8.6 1.06a4 4 0 0 1-4.45-3.48l-1.06-8.6a4 4 0 0 1 3.48-4.46l1.42-.18zm2.34 9.76a2.13 2.13 0 0 0-2.99.37l-1.7 2.18.23 1.89c.14 1.16 1.2 2 2.37 1.85l8.6-1.06.15-.02zm1.77-11.4A2.1 2.1 0 0 0 8.05 5l-.1.77 5.4-.66a4 4 0 0 1 4.46 3.48l1 8.14c.54-.32.92-.88 1-1.55l1.06-8.6a2.13 2.13 0 0 0-1.85-2.37zm1.5 6.44a1.83 1.83 0 1 0 .44 3.64 1.83 1.83 0 0 0-.44-3.64" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFill.displayName = 'ImagePileFill';

// Triple export pattern (lucide-react style)
export { ImagePileFill, ImagePileFill as ImagePileFillIcon, ImagePileFill as SiImagePileFill };
export default ImagePileFill;
export type { ImagePileFillProps };
