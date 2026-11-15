import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileFillProps = Omit<IconBaseProps, 'children'>;

const ImagePileFill = memo(
  forwardRef<SVGSVGElement, ImagePileFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.44 4.8c.25-2.05 2.12-3.51 4.18-3.26l8.6 1.06c2.05.25 3.52 2.12 3.26 4.18l-1.05 8.6c-.19 1.51-1.25 2.7-2.62 3.12-.34 1.63-1.68 2.94-3.42 3.15l-8.6 1.06c-2.2.27-4.2-1.3-4.46-3.48l-1.06-8.6C1 8.42 2.56 6.42 4.75 6.16l1.54-.2zm2.13 9.86c-.87-.68-2.13-.53-2.8.34l-1.9 2.43.2 1.58c.14 1.24 1.27 2.11 2.5 1.96l8.6-1.05.1-.02zm1.86-11.63c-1.23-.15-2.35.73-2.5 1.96l-.1.8 5.52-.68c2.2-.27 4.2 1.3 4.46 3.48l1.02 8.28c.59-.34 1.02-.94 1.1-1.67L21 6.6c.15-1.24-.73-2.36-1.96-2.51zm1.49 6.57c-1 .12-1.72 1.04-1.6 2.04s1.04 1.72 2.04 1.6c1-.13 1.72-1.04 1.6-2.05s-1.04-1.71-2.04-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFill.displayName = 'ImagePileFill';

// Triple export pattern
export { ImagePileFill, ImagePileFill as ImagePileFillIcon, ImagePileFill as SiImagePileFill };
export default ImagePileFill;
export type { ImagePileFillProps };
