import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageStackFillProps = Omit<IconBaseProps, 'children'>;

const ImageStackFill = memo(
  forwardRef<SVGSVGElement, ImageStackFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v3.6q.02 1.44-.06 2.37c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.47.25-.98.36-1.54.41l-.05.45q-.09.69-.39 1.3a4.5 4.5 0 0 1-1.97 1.96 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 16.84 2 15.4v-2.8q-.01-1.44.05-2.38a5 5 0 0 1 .5-1.98A3.9 3.9 0 0 1 4.9 6.3q.6-.2 1.32-.25h-.07l.02-.3c.04-.55.14-1.04.38-1.5q.57-1.13 1.7-1.7c.46-.24.95-.34 1.5-.38q.81-.06 2.05-.04zm-7.62 10.5q-.5-.15-1.02-.04l-.14.04a2 2 0 0 0-.64.38l-.53.5L4 15.76q-.01 1.19.04 1.86c.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.44-.23.75-.59l-5.63-5.63-.53-.5a2 2 0 0 0-.64-.38M7.9 6h3.49q1.44-.01 2.38.05a5 5 0 0 1 1.98.5A3.9 3.9 0 0 1 17.7 8.9q.2.62.25 1.32.06.94.05 2.38v3.44q.45-.07.7-.2.75-.39 1.14-1.15c.12-.23.2-.53.24-1.06.04-.54.05-1.24.05-2.23V7.8c0-.85 0-1.44-.04-1.9s-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2c-.46-.03-1.05-.04-1.9-.04h-4.4c-.85 0-1.44 0-1.9.04s-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86zm4.59 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackFill.displayName = 'ImageStackFill';

// Triple export pattern (lucide-react style)
export { ImageStackFill, ImageStackFill as ImageStackFillIcon, ImageStackFill as SiImageStackFill };
export default ImageStackFill;
export type { ImageStackFillProps };
