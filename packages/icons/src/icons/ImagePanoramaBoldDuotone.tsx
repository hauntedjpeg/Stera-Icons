import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaBoldDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.7 4.05c.3-.1.63-.04.9.14.25.2.4.5.4.81v14c0 .32-.15.62-.4.8-.27.2-.6.25-.9.15-6.1-1.93-11.3-1.93-17.4 0-.3.1-.63.05-.9-.14-.25-.2-.4-.5-.4-.81V5c0-.32.15-.62.4-.8.27-.2.6-.25.9-.15 6.1 1.93 11.3 1.93 17.4 0m-.7 2.3c-5.52 1.53-10.48 1.53-16 0v11.3c5.52-1.54 10.48-1.54 16 0z" clipRule="evenodd" opacity={.4} />
        <path d="M4.09 10c.78-.78 2.04-.78 2.82 0l3.59 3.59L12.09 12c.78-.78 2.04-.78 2.82 0L20 17.09v.57q-1.5-.41-2.94-.69l-3.56-3.56L11.91 15c-.78.78-2.04.78-2.82 0L5.5 11.41 4 12.91V10.1zM17 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

ImagePanoramaBoldDuotone.displayName = 'ImagePanoramaBoldDuotone';

// Triple export pattern
export { ImagePanoramaBoldDuotone, ImagePanoramaBoldDuotone as ImagePanoramaBoldDuotoneIcon, ImagePanoramaBoldDuotone as SiImagePanoramaBoldDuotone };
export default ImagePanoramaBoldDuotone;
export type { ImagePanoramaBoldDuotoneProps };
