import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrophyFillDuotone = memo(
  forwardRef<SVGSVGElement, TrophyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.8 16.65.3.01c1.77.16 3.15 1.64 3.15 3.44v.9c0 .41-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75v-.9c0-1.8 1.39-3.28 3.15-3.44l.3-.01zM19.67 4.5c1.16 0 2.04 1.04 1.85 2.18l-.4 2.45c-.22 1.26-.97 2.36-2.06 3.02l-2.5 1.5q.39-1.08.62-2.12l1.11-.67c.72-.43 1.2-1.15 1.34-1.97l.41-2.45c.04-.23-.14-.44-.37-.44h-1.95V4.8l-.03-.3zM6.3 4.5l-.01.3V6H4.32c-.23 0-.4.2-.37.44l.4 2.45c.15.82.64 1.54 1.35 1.97l1.11.67q.24 1.04.62 2.12l-2.5-1.5c-1.1-.66-1.84-1.76-2.05-3.02l-.41-2.45c-.2-1.14.69-2.18 1.85-2.18z" opacity={0.4} />
        <path d="M15.15 2.25c1.4 0 2.55 1.14 2.56 2.54.04 3.7-.03 7.6-2.7 12.08q-.56-.22-1.21-.22h-3.6q-.65 0-1.22.22C6.32 12.4 6.25 8.48 6.28 4.8c.02-1.4 1.16-2.54 2.57-2.54z" />
    </IconBase>
  ))
);

TrophyFillDuotone.displayName = 'TrophyFillDuotone';

// Triple export pattern
export { TrophyFillDuotone, TrophyFillDuotone as TrophyFillDuotoneIcon, TrophyFillDuotone as SiTrophyFillDuotone };
export default TrophyFillDuotone;
export type { TrophyFillDuotoneProps };
