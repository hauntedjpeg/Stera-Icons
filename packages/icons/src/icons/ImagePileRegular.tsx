import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileRegularProps = Omit<IconBaseProps, 'children'>;

const ImagePileRegular = memo(
  forwardRef<SVGSVGElement, ImagePileRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.92 9.6c1-.12 1.92.59 2.04 1.6.12 1-.6 1.91-1.6 2.04-1 .12-1.92-.6-2.04-1.6s.6-1.92 1.6-2.04" />
        <path fillRule="evenodd" d="M6.44 4.8c.25-2.05 2.12-3.51 4.18-3.26l8.6 1.06c2.05.25 3.52 2.12 3.26 4.18l-1.05 8.6c-.2 1.61-1.4 2.86-2.89 3.2-.36 1.47-1.6 2.63-3.18 2.83l-8.6 1.05c-2.06.25-3.93-1.2-4.19-3.26l-1.05-8.6c-.25-2.06 1.2-3.93 3.26-4.18l1.48-.19zm1.84 11.54c-.57-.45-1.39-.34-1.83.22l-2.28 2.92c.34.98 1.33 1.62 2.4 1.5l6.6-.82zm5.29-9.5L4.97 7.9C3.73 8.06 2.86 9.18 3 10.41l.86 7.02 1.4-1.8c.95-1.21 2.71-1.43 3.94-.47l6.07 4.74c1.17-.2 2-1.3 1.85-2.5l-1.05-8.6c-.16-1.23-1.28-2.1-2.51-1.95m-3.14-3.81c-1.23-.15-2.35.73-2.5 1.96L7.8 6.04l5.59-.68c2.05-.25 3.92 1.2 4.17 3.26L18.6 17c.71-.3 1.25-.97 1.35-1.8L21 6.6c.15-1.23-.73-2.35-1.96-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileRegular.displayName = 'ImagePileRegular';

// Triple export pattern
export { ImagePileRegular, ImagePileRegular as ImagePileRegularIcon, ImagePileRegular as SiImagePileRegular };
export default ImagePileRegular;
export type { ImagePileRegularProps };
