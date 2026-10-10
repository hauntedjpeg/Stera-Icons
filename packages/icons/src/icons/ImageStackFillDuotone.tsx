import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageStackFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageStackFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageStackFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37l-.3.02v-.07q.06-.94.05-2.38v-2.8q.01-1.44-.05-2.38-.06-.96-.44-1.76c-.43-.85-1.12-1.54-1.97-1.97-.54-.27-1.11-.39-1.76-.44Q12.84 6 11.4 6H8.6q-1.44-.01-2.38.05h-.07l.02-.3c.04-.55.14-1.04.38-1.5q.57-1.13 1.7-1.7c.46-.24.95-.34 1.5-.38q.81-.06 2.05-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M11.4 6q1.44-.01 2.38.05.7.05 1.32.25.34.09.66.25 1.11.57 1.7 1.7.15.3.24.65.2.62.25 1.32.06.94.05 2.38v2.8q.01 1.44-.05 2.38-.06.96-.44 1.76c-.43.85-1.12 1.54-1.97 1.97q-.8.39-1.76.44-.94.06-2.38.05H8.6q-1.44.01-2.38-.05c-.65-.05-1.22-.17-1.76-.44-.85-.43-1.54-1.12-1.97-1.97-.27-.54-.39-1.11-.44-1.76Q2 16.84 2 15.4v-2.8q-.01-1.44.05-2.38.05-.7.25-1.32.09-.34.25-.66.57-1.11 1.7-1.7.3-.15.65-.24.6-.2 1.32-.25Q7.16 6 8.6 6zm-2.82 6.63q-.5-.15-1.02-.04l-.14.04q-.4.15-.64.38l-.53.5L4 15.76q-.01 1.19.04 1.86c.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.44-.23.75-.59l-5.63-5.63-.53-.5c-.17-.14-.37-.3-.64-.38M12.5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackFillDuotone.displayName = 'ImageStackFillDuotone';

// Triple export pattern
export { ImageStackFillDuotone, ImageStackFillDuotone as ImageStackFillDuotoneIcon, ImageStackFillDuotone as SiImageStackFillDuotone };
export default ImageStackFillDuotone;
export type { ImageStackFillDuotoneProps };
