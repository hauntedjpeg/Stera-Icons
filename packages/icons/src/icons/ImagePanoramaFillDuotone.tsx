import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-fill-duotone" {...props}>
      <path fillRule="evenodd" d="m21.86 19.13-7.03-7.04a1.9 1.9 0 0 0-2.66 0l-1.58 1.58a.13.13 0 0 1-.18 0L6.83 10.1a1.9 1.9 0 0 0-2.66 0l-1.79 1.8a1 1 0 0 0-.25.61V5a.87.87 0 0 1 1.13-.83 27 27 0 0 0 17.48 0 .87.87 0 0 1 1.14.83v14zM17 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M4.17 10.09a1.9 1.9 0 0 1 2.66 0l3.58 3.58q.09.08.18 0l1.58-1.58a1.9 1.9 0 0 1 2.66 0l7.03 7.04a.9.9 0 0 1-1.12.7l-.92-.27-.11-.04-.29-.08-.23-.06-.89-.23-.21-.05-.27-.06-.34-.07-.17-.04-.33-.06-.26-.05-.18-.03-.34-.06-.53-.09-.21-.02-.32-.05q-.13 0-.25-.03l-.24-.02-.29-.03q-.8-.08-1.58-.1h-.23l-.12-.01h-1.2l-.2.01-.88.05-.14.01-.83.08-.24.03-.57.08-.25.03-.57.1-.17.03-.29.05-.33.07-1.29.29-.3.08-.25.06-.35.1-.18.05-.33.1-.8.23A.88.88 0 0 1 2.13 19v-6.5q0-.36.25-.62zM17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ImagePanoramaFillDuotone.displayName = 'ImagePanoramaFillDuotone';

// Triple export pattern (lucide-react style)
export { ImagePanoramaFillDuotone, ImagePanoramaFillDuotone as ImagePanoramaFillDuotoneIcon, ImagePanoramaFillDuotone as SiImagePanoramaFillDuotone };
export default ImagePanoramaFillDuotone;
export type { ImagePanoramaFillDuotoneProps };
