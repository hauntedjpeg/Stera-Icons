import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, CameraOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m7.2 8.61-.37.02c-.82 0-1.07 0-1.26.04-.76.17-1.36.76-1.52 1.53-.04.18-.05.43-.05 1.25v2.75c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.79l1.92 1.93q-.92.09-2.31.07H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2v-2.75c0-.71 0-1.23.1-1.69.33-1.52 1.52-2.7 3.04-3.04l.14-.03zM13.74 4q.45-.01.89.1.46.15.85.45c.31.26.53.6.76.93l.7 1.02.09.12h.14c.72 0 1.24 0 1.69.1 1.52.33 2.71 1.52 3.05 3.04.1.46.09.98.09 1.7v2.74c0 1.1 0 1.96-.12 2.63-.1.54-.61.9-1.16.8s-.9-.6-.8-1.15c.08-.46.08-1.1.08-2.28v-2.75c0-.82 0-1.07-.05-1.25-.16-.77-.76-1.36-1.52-1.53-.19-.04-.44-.04-1.26-.04q-.18 0-.41-.02-.72-.12-1.22-.64-.15-.19-.24-.33l-.71-1.03c-.3-.43-.34-.48-.37-.5q-.07-.06-.17-.09c-.03-.01-.1-.02-.61-.02h-2.88c-.52 0-.58.01-.61.02l-.09.04c-.49.25-1.1.06-1.35-.43-.25-.5-.06-1.1.43-1.35q.2-.1.43-.17c.3-.1.6-.1.9-.11z" opacity={0.4} />
        <path d="M10.75 12.17q-.24.36-.25.83c0 .83.67 1.5 1.5 1.5q.47-.01.83-.25l1.43 1.42c-.61.52-1.4.83-2.26.83-1.93 0-3.5-1.57-3.5-3.5 0-.86.31-1.65.83-2.26z" opacity={0.4} />
        <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l17 17c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-17-17c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

CameraOffBoldDuotone.displayName = 'CameraOffBoldDuotone';

// Triple export pattern
export { CameraOffBoldDuotone, CameraOffBoldDuotone as CameraOffBoldDuotoneIcon, CameraOffBoldDuotone as SiCameraOffBoldDuotone };
export default CameraOffBoldDuotone;
export type { CameraOffBoldDuotoneProps };
