import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaRegularProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaRegular = memo(
  forwardRef<SVGSVGElement, ImagePanoramaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M20.77 4.29q.37-.12.67.1.3.24.31.61v14q0 .38-.3.6-.32.23-.68.11c-6.15-1.95-11.4-1.95-17.54 0-.23.08-.48.04-.67-.1q-.3-.24-.31-.61V5q0-.37.3-.6.32-.23.68-.11c6.15 1.95 11.4 1.95 17.54 0m-15.1 6.95c-.1-.1-.25-.1-.35 0L3.75 12.8v5.18c4.9-1.41 9.31-1.62 14.07-.6l-4.14-4.15c-.1-.1-.26-.1-.36 0l-1.58 1.58c-.69.69-1.8.69-2.48 0zM20.26 6C14.53 7.66 9.47 7.66 3.75 6v4.68l.51-.51c.69-.69 1.8-.69 2.48 0l3.58 3.58c.1.1.26.1.36 0l1.58-1.58c.69-.69 1.8-.69 2.48 0l5.51 5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaRegular.displayName = 'ImagePanoramaRegular';

// Triple export pattern
export { ImagePanoramaRegular, ImagePanoramaRegular as ImagePanoramaRegularIcon, ImagePanoramaRegular as SiImagePanoramaRegular };
export default ImagePanoramaRegular;
export type { ImagePanoramaRegularProps };
