import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageLandscapeRegularProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeRegular = memo(
  forwardRef<SVGSVGElement, ImageLandscapeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 7.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
        <path fillRule="evenodd" d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v4.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.35 7.16c-.2-.2-.5-.2-.7 0l-3.4 3.4q0 .8.04 1.3c.04.45.1.71.2.91q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.46-.24.77-.66l-2.94-2.94c-.2-.2-.5-.2-.7 0l-1.24 1.24c-.78.78-2.04.78-2.82 0zM7.8 5.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.89l2.34-2.34c.78-.78 2.04-.78 2.82 0l4.24 4.24c.2.2.5.2.7 0l1.24-1.24c.78-.78 2.04-.78 2.82 0l2.32 2.32q.02-.57.02-1.47V9.8c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageLandscapeRegular.displayName = 'ImageLandscapeRegular';

// Triple export pattern
export { ImageLandscapeRegular, ImageLandscapeRegular as ImageLandscapeRegularIcon, ImageLandscapeRegular as SiImageLandscapeRegular };
export default ImageLandscapeRegular;
export type { ImageLandscapeRegularProps };
