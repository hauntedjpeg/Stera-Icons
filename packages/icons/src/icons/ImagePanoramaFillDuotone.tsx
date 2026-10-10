import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m21.86 19.13-7.03-7.04c-.74-.73-1.92-.73-2.66 0l-1.58 1.58q-.09.08-.18 0L6.83 10.1c-.74-.73-1.92-.73-2.66 0l-1.79 1.8q-.25.25-.25.61V5q.01-.44.35-.7c.23-.17.52-.22.78-.13 6.13 1.94 11.35 1.94 17.48 0 .26-.09.55-.04.78.12q.35.27.36.71v14zM17 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M4.17 10.09c.74-.73 1.92-.73 2.66 0l3.58 3.58q.09.08.18 0l1.58-1.58c.74-.73 1.92-.73 2.66 0l7.03 7.04q-.05.36-.34.58c-.23.16-.52.2-.78.12l-.92-.27-.11-.04-.29-.08-.23-.06-.32-.08-.23-.06-.34-.09-.21-.05-.27-.06-.34-.07-.17-.04-.33-.06-.26-.05-.18-.03-.34-.06-.26-.04-.27-.05-.21-.02-.32-.05q-.13 0-.25-.03l-.24-.02-.29-.03q-.8-.08-1.58-.1h-.23l-.12-.01h-1.2l-.2.01-.29.02-.25.01-.34.02-.14.01-.3.03-.3.03-.23.02-.24.03-.26.04-.3.04-.26.03-.2.04-.37.06-.17.03-.29.05-.33.07-.2.04-.33.07-.2.05-.36.08-.2.05-.3.08-.25.06-.35.1-.18.05-.33.1-.8.23c-.26.09-.55.04-.78-.12q-.34-.27-.35-.71v-6.5q0-.36.25-.62zM17 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

ImagePanoramaFillDuotone.displayName = 'ImagePanoramaFillDuotone';

// Triple export pattern
export { ImagePanoramaFillDuotone, ImagePanoramaFillDuotone as ImagePanoramaFillDuotoneIcon, ImagePanoramaFillDuotone as SiImagePanoramaFillDuotone };
export default ImagePanoramaFillDuotone;
export type { ImagePanoramaFillDuotoneProps };
