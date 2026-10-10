import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaBoldProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaBold = memo(
  forwardRef<SVGSVGElement, ImagePanoramaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M20.7 4.05c.3-.1.63-.04.9.14.25.2.4.5.4.81v14c0 .32-.15.62-.4.8-.27.2-.6.25-.9.15-6.1-1.93-11.3-1.93-17.4 0-.3.1-.63.05-.9-.14-.25-.2-.4-.5-.4-.81V5c0-.32.15-.62.4-.8.27-.2.6-.25.9-.15 6.1 1.93 11.3 1.93 17.4 0M4 12.9v4.75c4.53-1.27 8.67-1.5 13.06-.69l-3.56-3.56L11.91 15c-.78.78-2.04.78-2.82 0L5.5 11.41zm16-6.57c-5.52 1.54-10.48 1.54-16 0v3.75l.09-.09c.78-.78 2.04-.78 2.82 0l3.59 3.59L12.09 12c.78-.78 2.04-.78 2.82 0L20 17.09z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaBold.displayName = 'ImagePanoramaBold';

// Triple export pattern
export { ImagePanoramaBold, ImagePanoramaBold as ImagePanoramaBoldIcon, ImagePanoramaBold as SiImagePanoramaBold };
export default ImagePanoramaBold;
export type { ImagePanoramaBoldProps };
