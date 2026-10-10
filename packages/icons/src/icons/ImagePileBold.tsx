import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileBoldProps = Omit<IconBaseProps, 'children'>;

const ImagePileBold = memo(
  forwardRef<SVGSVGElement, ImagePileBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.92 9.6c1-.12 1.92.59 2.04 1.6.12 1-.6 1.91-1.6 2.04-1 .12-1.92-.6-2.04-1.6s.6-1.92 1.6-2.04" />
        <path fillRule="evenodd" d="M6.19 4.78c.27-2.2 2.26-3.76 4.46-3.49l8.6 1.06c2.2.27 3.75 2.26 3.48 4.46l-1.05 8.6c-.2 1.67-1.41 2.96-2.94 3.37-.43 1.5-1.71 2.67-3.35 2.87l-8.6 1.06c-2.13.26-4.07-1.2-4.43-3.28l-.03-.2-1.06-8.6C1 8.43 2.56 6.43 4.75 6.17L6.04 6zm1.94 11.76c-.46-.36-1.12-.28-1.48.18l-2.2 2.8c.34.8 1.18 1.32 2.09 1.2l6-.73zM13.6 7.1 5 8.15c-1.1.14-1.88 1.13-1.75 2.23l.8 6.42 1.02-1.31c1.04-1.33 2.96-1.57 4.29-.53l5.98 4.67c1-.22 1.67-1.16 1.54-2.2l-1.05-8.6c-.13-1.02-1.01-1.77-2.03-1.75zm-3.2-3.82c-1.1-.14-2.1.64-2.23 1.74l-.09.74 5.27-.65.2-.02c2.12-.15 4 1.38 4.26 3.5l.98 8c.48-.3.83-.81.9-1.42l1.06-8.6c.13-1.1-.65-2.1-1.75-2.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileBold.displayName = 'ImagePileBold';

// Triple export pattern
export { ImagePileBold, ImagePileBold as ImagePileBoldIcon, ImagePileBold as SiImagePileBold };
export default ImagePileBold;
export type { ImagePileBoldProps };
