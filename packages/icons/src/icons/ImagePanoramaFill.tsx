import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaFillProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFill = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M20.74 4.17c.26-.09.55-.04.78.12q.35.27.36.71v14q-.02.44-.36.7c-.23.17-.52.22-.78.13q-1.55-.49-3.03-.81l-.49-.1c-4.47-.91-8.6-.68-13.25.7l-.7.21-.1.03q-.32.05-.6-.1l-.09-.05q-.12-.1-.2-.23-.12-.17-.15-.38V5q.01-.44.35-.7c.23-.17.52-.22.78-.13 6.13 1.94 11.35 1.94 17.48 0m-.61 2c-5.62 1.6-10.64 1.6-16.25 0v4.22l.3-.3c.73-.73 1.91-.73 2.65 0l3.58 3.58q.09.08.18 0l1.58-1.58c.74-.73 1.92-.73 2.66 0l5.3 5.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaFill.displayName = 'ImagePanoramaFill';

// Triple export pattern
export { ImagePanoramaFill, ImagePanoramaFill as ImagePanoramaFillIcon, ImagePanoramaFill as SiImagePanoramaFill };
export default ImagePanoramaFill;
export type { ImagePanoramaFillProps };
