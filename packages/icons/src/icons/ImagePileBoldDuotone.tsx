import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileBoldDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.19 4.78c.27-2.2 2.26-3.76 4.46-3.49l8.6 1.06c2.2.27 3.75 2.26 3.48 4.46l-1.05 8.6c-.2 1.67-1.41 2.96-2.94 3.37q.23-.75.13-1.58l-.08-.6c.48-.31.83-.82.9-1.43l1.06-8.6c.13-1.1-.65-2.1-1.75-2.24l-8.6-1.05c-1.1-.14-2.1.64-2.23 1.74l-.09.74L6.04 6z" opacity={.4} />
        <path d="M11.92 9.6c1-.12 1.92.59 2.04 1.6.12 1-.6 1.91-1.6 2.04-1 .12-1.92-.6-2.04-1.6s.6-1.92 1.6-2.04" />
        <path fillRule="evenodd" d="M13.56 5.1c2.11-.16 4 1.37 4.25 3.5l1.06 8.6c.27 2.19-1.3 4.18-3.48 4.45l-8.6 1.06c-2.13.26-4.07-1.2-4.43-3.28l-.03-.2-1.06-8.6C1 8.42 2.56 6.42 4.75 6.16l8.6-1.06zM8.13 16.53c-.46-.36-1.12-.28-1.48.18l-2.2 2.8c.34.8 1.18 1.32 2.09 1.2l6-.73zM13.6 7.1 5 8.15c-1.1.14-1.88 1.13-1.75 2.23l.8 6.42 1.02-1.32c1.04-1.32 2.96-1.56 4.29-.52l5.98 4.67c1-.22 1.67-1.16 1.54-2.19l-1.05-8.6c-.13-1.03-1.01-1.78-2.03-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileBoldDuotone.displayName = 'ImagePileBoldDuotone';

// Triple export pattern
export { ImagePileBoldDuotone, ImagePileBoldDuotone as ImagePileBoldDuotoneIcon, ImagePileBoldDuotone as SiImagePileBoldDuotone };
export default ImagePileBoldDuotone;
export type { ImagePileBoldDuotoneProps };
