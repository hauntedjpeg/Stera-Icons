import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.77 4.29q.37-.12.67.1.3.24.31.61v14q0 .38-.3.6-.32.23-.68.11c-6.15-1.95-11.4-1.95-17.54 0-.23.08-.48.04-.67-.1q-.3-.24-.31-.61V5q0-.37.3-.6.32-.23.68-.11c6.15 1.95 11.4 1.95 17.54 0M20.25 6C14.53 7.66 9.47 7.66 3.75 6v11.98c5.72-1.65 10.78-1.65 16.5 0z" clipRule="evenodd" opacity={.4} />
        <path d="M4.26 10.18c.69-.69 1.8-.69 2.48 0l3.58 3.58c.1.1.26.1.36 0l1.58-1.58c.69-.69 1.8-.69 2.48 0l5.51 5.5V18q-1.23-.36-2.43-.6l-4.14-4.15c-.1-.1-.26-.1-.36 0l-1.58 1.58c-.69.69-1.8.69-2.48 0l-3.58-3.58c-.1-.1-.26-.1-.36 0L3.75 12.8V10.7zM17 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

ImagePanoramaRegularDuotone.displayName = 'ImagePanoramaRegularDuotone';

// Triple export pattern
export { ImagePanoramaRegularDuotone, ImagePanoramaRegularDuotone as ImagePanoramaRegularDuotoneIcon, ImagePanoramaRegularDuotone as SiImagePanoramaRegularDuotone };
export default ImagePanoramaRegularDuotone;
export type { ImagePanoramaRegularDuotoneProps };
