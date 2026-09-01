import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageStackBoldProps = Omit<IconBaseProps, 'children'>;

const ImageStackBold = memo(
  forwardRef<SVGSVGElement, ImageStackBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M16.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4l-.28.01-.01.28a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 17.43 2 16.2v-4.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4l.3-.01h-.02l.01-.28a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q10.57 2 11.8 2zM8.15 14.65a.5.5 0 0 0-.3 0h-.01l-.03.01-.15.12-.65.62-2.94 2.95q.05.4.15.56.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4l1.37-.01L9 15.4a13 13 0 0 0-.8-.74l-.03-.01M7.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 11.8v3.79l1.6-1.6q.42-.44.77-.74a2.5 2.5 0 0 1 2.4-.5c.35.1.62.3.86.5q.35.3.77.74l5.2 5.2.18-.28c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-4.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C13.64 8 13.06 8 12.2 8zm4-4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82V6h4.16q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.17h.09c.44-.04.66-.1.82-.19a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 4 17.06 4 16.2 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackBold.displayName = 'ImageStackBold';

// Triple export pattern (lucide-react style)
export { ImageStackBold, ImageStackBold as ImageStackBoldIcon, ImageStackBold as SiImageStackBold };
export default ImageStackBold;
export type { ImageStackBoldProps };
