import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7-.04.45-.11.83l-3.46-3.45q-.29-.3-.53-.5-.25-.24-.64-.38-.5-.15-1.02-.04l-.14.04q-.4.14-.64.38-.24.2-.53.5l-.4.4q-.3.3-.43.4l-.06.06h-.05l-.07-.05c-.1-.08-.21-.2-.42-.4L9.75 11.5l-.53-.5c-.17-.14-.37-.3-.64-.38q-.5-.15-1.02-.04l-.14.04q-.4.15-.64.38l-.53.5-3.62 3.62V9.9q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM15 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" opacity={.4} />
        <path d="M7.56 10.6q.52-.13 1.02.03.4.15.64.38l.53.5 3.07 3.07q.3.3.42.4.05.05.07.06h.05l.06-.05.43-.4.4-.41q.29-.3.53-.5.24-.24.64-.38l.14-.04q.52-.12 1.02.04.4.14.64.38.24.2.53.5l3.48 3.48-.16.51q-.1.29-.23.54c-.46.92-1.2 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.18-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.44-.86-.51-1.87-.53-3.2v-.37l3.62-3.63.53-.5c.17-.14.37-.3.64-.38zM15 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

ImageSquareFillDuotone.displayName = 'ImageSquareFillDuotone';

// Triple export pattern
export { ImageSquareFillDuotone, ImageSquareFillDuotone as ImageSquareFillDuotoneIcon, ImageSquareFillDuotone as SiImageSquareFillDuotone };
export default ImageSquareFillDuotone;
export type { ImageSquareFillDuotoneProps };
