import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeDashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubeDashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubeDashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17.88c.55 0 1 .44 1 1v1.42l.76-.42c.49-.27 1.1-.1 1.36.38.27.49.1 1.1-.38 1.36l-1.28.71c-.9.5-2.01.5-2.92 0l-1.28-.7c-.48-.27-.65-.88-.38-1.37.26-.48.87-.65 1.36-.38l.76.42v-1.42c0-.56.45-1 1-1M4.76 4.88c.49-.27 1.1-.1 1.36.38.27.49.1 1.1-.38 1.36L5.06 7l1.24.69c.48.27.65.88.39 1.36-.27.48-.88.65-1.36.39L4 8.7v.8c0 .55-.45 1-1 1s-1-.45-1-1V8.18c0-1.1.6-2.1 1.54-2.63zM17.88 5.26c.26-.48.87-.65 1.36-.38l1.22.67C21.4 6.08 22 7.1 22 8.18V9.5c0 .55-.45 1-1 1s-1-.45-1-1v-.8l-1.33.74c-.48.26-1.09.1-1.36-.4-.26-.47-.1-1.08.4-1.35L18.93 7l-.68-.38c-.48-.26-.65-.87-.38-1.36" opacity={0.4} />
        <path d="M3 13.5c.55 0 1 .45 1 1v1.32c0 .37.2.7.51.88l1.23.68c.48.26.65.87.38 1.35-.26.49-.87.66-1.36.4l-1.22-.68C2.6 17.92 2 16.9 2 15.82V14.5c0-.55.45-1 1-1M21 13.5c.55 0 1 .45 1 1v1.32c0 1.1-.6 2.1-1.54 2.63l-1.22.67c-.49.27-1.1.1-1.36-.39-.27-.48-.1-1.09.38-1.35l1.23-.68c.31-.18.51-.51.51-.88V14.5c0-.55.45-1 1-1M14.33 9.56c.48-.26 1.09-.09 1.36.4.26.48.1 1.08-.4 1.35L13 12.6v2.54c0 .55-.45 1-1 1s-1-.45-1-1v-2.54L8.7 11.3c-.48-.27-.65-.87-.39-1.36.27-.48.88-.65 1.36-.39l2.33 1.3zM10.54 1.67c.9-.5 2.01-.5 2.92 0l1.28.7c.48.27.65.88.38 1.36-.26.49-.87.66-1.36.4L12.5 3.4c-.3-.16-.67-.16-.98 0l-1.27.71c-.49.27-1.1.1-1.36-.39-.27-.48-.1-1.09.38-1.35z" />
    </IconBase>
  ))
);

CubeDashBoldDuotone.displayName = 'CubeDashBoldDuotone';

// Triple export pattern
export { CubeDashBoldDuotone, CubeDashBoldDuotone as CubeDashBoldDuotoneIcon, CubeDashBoldDuotone as SiCubeDashBoldDuotone };
export default CubeDashBoldDuotone;
export type { CubeDashBoldDuotoneProps };
