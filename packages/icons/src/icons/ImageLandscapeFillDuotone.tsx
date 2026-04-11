import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageLandscapeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageLandscapeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.4q.01 1.24-.05 2.04c-.02.23-.1.75-.1.75L18 13.26a2.13 2.13 0 0 0-3 0l-1.23 1.24a.4.4 0 0 1-.54 0L9 10.26a2.13 2.13 0 0 0-3 0l-3.62 3.62-.25.26V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM15 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path d="M6 10.26a2.13 2.13 0 0 1 3 0l4.23 4.24c.15.14.39.14.54 0L15 13.26a2.13 2.13 0 0 1 3 0L21.72 17a3 3 0 0 1-.27.77 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.04H7.8q-1.24.01-2.04-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.91-2.27l-.02-.05a4 4 0 0 1-.12-.65l-.02-.2v-.02l-.01-.16-.01-.24-.02-.6v-1.12l.25-.26zM17 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </IconBase>
  ))
);

ImageLandscapeFillDuotone.displayName = 'ImageLandscapeFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageLandscapeFillDuotone, ImageLandscapeFillDuotone as ImageLandscapeFillDuotoneIcon, ImageLandscapeFillDuotone as SiImageLandscapeFillDuotone };
export default ImageLandscapeFillDuotone;
export type { ImageLandscapeFillDuotoneProps };
