import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageLandscapeFillProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeFill = memo(
  forwardRef<SVGSVGElement, ImageLandscapeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-fill" {...props}>
      <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.4q.01 1.24-.05 2.04-.04.55-.18 1.03l-.02.07-.18.42a4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7l-.01-.03-.06-.12-.04-.1-.01-.04a4 4 0 0 1-.22-.94v-.04l-.03-.2v-.04q-.04-.42-.04-.96V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04zM7.8 5.88c-.85 0-1.44 0-1.9.03-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.03 1.05-.03 1.9v2.59L6 10.26a2.13 2.13 0 0 1 3 0l4.23 4.24c.15.14.39.14.54 0L15 13.26a2.13 2.13 0 0 1 3 0l2.12 2.12V9.8c0-.85 0-1.44-.03-1.9-.04-.45-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2c-.46-.03-1.05-.04-1.9-.04z" clipRule="evenodd" />
        <path d="M17 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </IconBase>
  ))
);

ImageLandscapeFill.displayName = 'ImageLandscapeFill';

// Triple export pattern (lucide-react style)
export { ImageLandscapeFill, ImageLandscapeFill as ImageLandscapeFillIcon, ImageLandscapeFill as SiImageLandscapeFill };
export default ImageLandscapeFill;
export type { ImageLandscapeFillProps };
