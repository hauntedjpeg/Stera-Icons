import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftBoldProps = Omit<IconBaseProps, 'children'>;

const RotationLeftBold = memo(
  forwardRef<SVGSVGElement, RotationLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.82 6.92c.35-.43.98-.49 1.4-.14.44.35.5.98.15 1.4-.73.89-1.18 1.95-1.32 3.08s.04 2.27.52 3.3 1.26 1.9 2.22 2.5c.96.62 2.07.94 3.21.94h.59l-1.3-1.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l3 3c.39.38.39 1.02 0 1.4l-3 3c-.4.4-1.03.4-1.42 0-.39-.38-.39-1.02 0-1.4l1.3-1.3h-.87c-1.42-.06-2.8-.48-4-1.24-1.28-.81-2.3-1.97-2.95-3.34s-.9-2.9-.71-4.4.8-2.93 1.76-4.1M11.3 1.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L11.42 4h.87c1.42.06 2.8.48 4 1.24 1.29.82 2.31 1.98 2.96 3.35s.89 2.9.7 4.41c-.2 1.5-.8 2.93-1.78 4.1-.35.42-.98.48-1.4.13-.43-.35-.49-.98-.14-1.4.73-.88 1.19-1.95 1.33-3.08s-.04-2.27-.52-3.3-1.25-1.9-2.22-2.52c-.9-.57-1.93-.89-3-.93h-.8l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-3-3c-.39-.38-.39-1.02 0-1.4z" />
    </IconBase>
  ))
);

RotationLeftBold.displayName = 'RotationLeftBold';

// Triple export pattern
export { RotationLeftBold, RotationLeftBold as RotationLeftBoldIcon, RotationLeftBold as SiRotationLeftBold };
export default RotationLeftBold;
export type { RotationLeftBoldProps };
