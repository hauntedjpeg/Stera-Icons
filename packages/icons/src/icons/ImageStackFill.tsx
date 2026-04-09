import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageStackFillProps = Omit<IconBaseProps, 'children'>;

const ImageStackFill = memo(
  forwardRef<SVGSVGElement, ImageStackFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-stack-fill" {...props}>
      <path fillRule="evenodd" d="M15.4 2.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v2.8q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.47.25-.98.36-1.54.41l-.05.45q-.09.69-.39 1.3a4.5 4.5 0 0 1-1.97 1.96 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 16.84 2 15.4v-2.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44H6.2q.06-.84.4-1.54a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43q.93-.08 2.37-.06zm-6.82 10.5q-.5-.15-1.02-.04l-.14.04a2 2 0 0 0-.64.38l-.53.5L4 15.76q-.01 1.19.04 1.86c.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.44-.23.75-.59l-5.63-5.63-.53-.5a2 2 0 0 0-.64-.38m4.02-8.76c-1 0-1.69 0-2.23.05a3 3 0 0 0-1.06.24q-.76.39-1.15 1.15a2 2 0 0 0-.2.7h-.15L8.6 6h2.8q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v3.44q.45-.07.7-.2.75-.39 1.14-1.15c.12-.23.2-.53.24-1.06.04-.54.05-1.24.05-2.23V8.6c0-1 0-1.69-.05-2.23a3 3 0 0 0-.24-1.06q-.39-.76-1.15-1.15a3 3 0 0 0-1.06-.24c-.54-.04-1.24-.04-2.23-.04zM12.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackFill.displayName = 'ImageStackFill';

// Triple export pattern (lucide-react style)
export { ImageStackFill, ImageStackFill as ImageStackFillIcon, ImageStackFill as SiImageStackFill };
export default ImageStackFill;
export type { ImageStackFillProps };
