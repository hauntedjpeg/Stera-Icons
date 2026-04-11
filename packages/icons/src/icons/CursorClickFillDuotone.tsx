import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorClickFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorClickFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorClickFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.03 12.7a.88.88 0 0 1 1.24 1.24L4.9 15.3a.88.88 0 0 1-1.24-1.24zM2.15 7.52a.9.9 0 0 1 1.08-.61l1.85.5a.88.88 0 0 1-.45 1.68l-1.86-.5a.87.87 0 0 1-.62-1.07M14.06 3.67a.88.88 0 0 1 1.24 1.24l-1.36 1.36a.88.88 0 0 1-1.23-1.24zM7.52 2.15a.9.9 0 0 1 1.07.62l.5 1.86a.88.88 0 0 1-1.69.45l-.5-1.85a.9.9 0 0 1 .62-1.08" opacity={0.4} />
        <path d="M8.7 10.73a1.6 1.6 0 0 1 2.03-2.03l10.05 3.35a1.6 1.6 0 0 1-.06 3.06l-4.33 1.28-1.28 4.33a1.6 1.6 0 0 1-3.06.06z" />
    </IconBase>
  ))
);

CursorClickFillDuotone.displayName = 'CursorClickFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorClickFillDuotone, CursorClickFillDuotone as CursorClickFillDuotoneIcon, CursorClickFillDuotone as SiCursorClickFillDuotone };
export default CursorClickFillDuotone;
export type { CursorClickFillDuotoneProps };
