import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotationRightBold = memo(
  forwardRef<SVGSVGElement, RotationRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.18 6.92c-.35-.43-.98-.49-1.41-.14s-.49.98-.14 1.4c.73.89 1.18 1.95 1.32 3.08s-.04 2.27-.53 3.3c-.48 1.03-1.25 1.9-2.21 2.5-.96.62-2.07.94-3.21.94h-.59l1.3-1.3c.39-.38.39-1.02 0-1.4-.4-.4-1.03-.4-1.42 0l-3 3c-.39.38-.39 1.02 0 1.4l3 3c.4.4 1.03.4 1.42 0 .39-.38.39-1.02 0-1.4L11.4 20h.87c1.42-.06 2.8-.48 4-1.24 1.28-.81 2.3-1.97 2.95-3.34s.9-2.9.7-4.4c-.18-1.51-.79-2.93-1.75-4.1M12.7 1.3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4L12.58 4h-.88c-1.41.06-2.8.48-4 1.24-1.28.82-2.3 1.98-2.95 3.35s-.89 2.9-.7 4.41c.2 1.5.8 2.93 1.78 4.1.35.42.98.48 1.4.13.43-.35.49-.98.14-1.4-.73-.88-1.2-1.95-1.33-3.08-.15-1.13.04-2.27.52-3.3s1.25-1.9 2.21-2.52c.9-.57 1.94-.89 3-.93h.81l-1.3 1.3c-.39.38-.39 1.02 0 1.4.4.4 1.03.4 1.42 0l3-3c.39-.38.39-1.02 0-1.4z" />
    </IconBase>
  ))
);

RotationRightBold.displayName = 'RotationRightBold';

// Triple export pattern
export { RotationRightBold, RotationRightBold as RotationRightBoldIcon, RotationRightBold as SiRotationRightBold };
export default RotationRightBold;
export type { RotationRightBoldProps };
