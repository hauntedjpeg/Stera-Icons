import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaFillProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFill = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M20.74 4.17a.87.87 0 0 1 1.14.83v14a.87.87 0 0 1-1.14.83 34 34 0 0 0-3.52-.92 26.3 26.3 0 0 0-13.96.92l-.1.03A.88.88 0 0 1 2.12 19V5a.87.87 0 0 1 1.14-.83 27 27 0 0 0 17.48 0m-.61 2a28 28 0 0 1-16.25 0v4.22l.3-.3a1.9 1.9 0 0 1 2.65 0l3.58 3.58q.09.08.18 0l1.58-1.58a1.9 1.9 0 0 1 2.66 0l5.3 5.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaFill.displayName = 'ImagePanoramaFill';

// Triple export pattern (lucide-react style)
export { ImagePanoramaFill, ImagePanoramaFill as ImagePanoramaFillIcon, ImagePanoramaFill as SiImagePanoramaFill };
export default ImagePanoramaFill;
export type { ImagePanoramaFillProps };
