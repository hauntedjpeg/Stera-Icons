import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFill = memo(
  forwardRef<SVGSVGElement, ImageSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
        <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7-.04.45-.11.83l.02.03-.16.51-.02.06-.05.14-.05.1-.1.24q-.19.35-.4.66-.7.94-1.74 1.47-.32.16-.66.27-.58.15-1.25.2l-.57.04q-.9.03-2.13.02H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13l-.1-.2-.02-.06-.05-.12-.03-.09-.04-.11q-.07-.23-.11-.44l-.01-.04q-.04-.18-.06-.35l-.01-.06-.03-.3-.01-.1v-.04l-.02-.14-.02-.37v-.14l-.02-.44V9.9q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM9.9 4.38c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26-.04.63-.04 1.43-.04 2.56v3.49l1.87-1.88.53-.5c.17-.14.37-.3.64-.38l.14-.04q.52-.12 1.02.04.4.15.64.38l.53.5 3.07 3.07q.3.3.42.4.05.05.07.06h.05l.06-.05.43-.4.4-.41q.29-.3.53-.5.24-.24.64-.38l.14-.04q.52-.12 1.02.04.4.14.64.38.24.2.53.5l1.86 1.85.02-1.93V9.9c0-1.13 0-1.93-.06-2.56-.05-.6-.14-.98-.29-1.26q-.46-.9-1.36-1.36c-.28-.15-.65-.24-1.26-.3-.63-.04-1.43-.04-2.56-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareFill.displayName = 'ImageSquareFill';

// Triple export pattern
export { ImageSquareFill, ImageSquareFill as ImageSquareFillIcon, ImageSquareFill as SiImageSquareFill };
export default ImageSquareFill;
export type { ImageSquareFillProps };
