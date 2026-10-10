import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.92 9.6c1-.12 1.92.59 2.04 1.6.12 1-.6 1.91-1.6 2.04-1 .12-1.92-.6-2.04-1.6s.6-1.92 1.6-2.04" />
        <path fillRule="evenodd" d="M13.38 5.36c2.06-.25 3.93 1.2 4.18 3.26l1.06 8.6q.05.38.02.75c-.14 1.75-1.48 3.21-3.29 3.44l-8.6 1.05c-2.05.25-3.92-1.2-4.18-3.26l-1.05-8.6c-.25-2.06 1.2-3.93 3.26-4.18zm-5.1 10.98c-.57-.45-1.39-.34-1.83.22l-2.28 2.92c.34.98 1.33 1.62 2.4 1.5l6.6-.82zm5.29-9.5L4.97 7.9C3.73 8.06 2.85 9.18 3 10.41l.86 7.02 1.4-1.8c.95-1.21 2.71-1.43 3.94-.47l6.07 4.74c1.02-.17 1.78-1.03 1.86-2.04v-.45l-1.06-8.6c-.16-1.24-1.28-2.11-2.51-1.96" clipRule="evenodd" />
        <path d="M11.92 9.6c1-.12 1.92.59 2.04 1.6.12 1-.6 1.91-1.6 2.04-1 .12-1.92-.6-2.04-1.6s.6-1.92 1.6-2.04" />
        <path fillRule="evenodd" d="M13.38 5.36c2.06-.25 3.93 1.2 4.18 3.26l1.06 8.6q.05.38.02.75c-.14 1.75-1.48 3.21-3.29 3.44l-8.6 1.05c-2.05.25-3.92-1.2-4.18-3.26l-1.05-8.6c-.25-2.06 1.2-3.93 3.26-4.18zm-5.1 10.98c-.57-.45-1.39-.34-1.83.22l-2.28 2.92c.34.98 1.33 1.62 2.4 1.5l6.6-.82zm5.29-9.5L4.97 7.9C3.73 8.06 2.85 9.18 3 10.41l.86 7.02 1.4-1.8c.95-1.21 2.71-1.43 3.94-.47l6.07 4.74c1.02-.17 1.78-1.03 1.86-2.04v-.45l-1.06-8.6c-.16-1.24-1.28-2.11-2.51-1.96" clipRule="evenodd" />
        <path d="M6.44 4.8c.25-2.05 2.12-3.51 4.18-3.26l8.6 1.06c2.05.25 3.52 2.12 3.26 4.18l-1.05 8.6c-.2 1.61-1.4 2.86-2.9 3.2q.1-.3.1-.6.04-.38-.01-.75l-.03-.24c.71-.3 1.25-.97 1.35-1.8L21 6.6c.15-1.23-.73-2.35-1.96-2.5l-8.6-1.06c-1.24-.15-2.36.73-2.51 1.96L7.8 6.04l-1.54.2z" opacity={.4} />
    </IconBase>
  ))
);

ImagePileRegularDuotone.displayName = 'ImagePileRegularDuotone';

// Triple export pattern
export { ImagePileRegularDuotone, ImagePileRegularDuotone as ImagePileRegularDuotoneIcon, ImagePileRegularDuotone as SiImagePileRegularDuotone };
export default ImagePileRegularDuotone;
export type { ImagePileRegularDuotoneProps };
