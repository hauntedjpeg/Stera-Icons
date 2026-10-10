import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileFillProps = Omit<IconBaseProps, 'children'>;

const ImagePileFill = memo(
  forwardRef<SVGSVGElement, ImagePileFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.31 4.8c.26-2.13 2.2-3.64 4.32-3.38l8.6 1.05c2.13.26 3.64 2.2 3.38 4.32l-1.06 8.6c-.2 1.6-1.32 2.84-2.77 3.25-.39 1.57-1.7 2.8-3.4 3.01l-8.6 1.06c-2.19.27-4.18-1.3-4.45-3.48l-1.06-8.6C1 8.42 2.56 6.42 4.75 6.16l1.42-.18zm2.34 9.76c-.93-.72-2.26-.56-2.99.37l-1.7 2.18.23 1.89c.14 1.16 1.2 2 2.36 1.85l8.6-1.06.16-.02zm1.77-11.4C9.25 3 8.19 3.83 8.05 5l-.1.77 5.4-.66c2.2-.27 4.2 1.3 4.46 3.48l1 8.14c.54-.32.92-.88 1-1.55l1.06-8.6c.14-1.17-.68-2.23-1.85-2.37zm1.5 6.44c-1 .12-1.72 1.04-1.6 2.04s1.04 1.72 2.04 1.6c1-.13 1.72-1.04 1.6-2.05s-1.04-1.71-2.04-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFill.displayName = 'ImagePileFill';

// Triple export pattern
export { ImagePileFill, ImagePileFill as ImagePileFillIcon, ImagePileFill as SiImagePileFill };
export default ImagePileFill;
export type { ImagePileFillProps };
