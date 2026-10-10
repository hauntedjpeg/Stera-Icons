import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrophyBoldDuotone = memo(
  forwardRef<SVGSVGElement, TrophyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.38 16.75c1.25.6 2.12 1.87 2.12 3.35v.9c0 .55-.45 1-1 1h-9c-.55 0-1-.45-1-1v-.9c0-1.48.87-2.75 2.12-3.35q.35.6.75 1.2l.3.45h.53c-.9 0-1.64.7-1.7 1.6h7c-.06-.9-.8-1.6-1.7-1.6h.53l.3-.44q.4-.61.75-1.2M6.1 4.25q-.06.27-.06.54v1.46H4.32q-.13.02-.13.15l.41 2.45c.13.75.58 1.4 1.23 1.8l.62.37q.25 1.36.78 2.8l-2.43-1.46c-1.15-.69-1.95-1.86-2.17-3.19l-.4-2.45C2.01 5.43 3 4.25 4.32 4.25zM19.67 4.25c1.31 0 2.31 1.18 2.1 2.47l-.41 2.45c-.22 1.33-1.02 2.5-2.17 3.2l-2.43 1.45q.52-1.45.78-2.8l.62-.37c.65-.4 1.1-1.05 1.23-1.8l.4-2.45q.02-.13-.12-.15h-1.7V4.79q0-.27-.06-.54z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.15 2c1.55 0 2.8 1.25 2.81 2.8.04 3.95-.03 8.21-3.33 13.16l-.3.44H9.66l-.3-.44C6.08 13 6 8.75 6.05 4.79 6.05 3.25 7.3 2 8.85 2zm-6.3 2c-.44 0-.8.36-.81.8-.04 3.75.04 7.37 2.7 11.6h2.52c2.66-4.23 2.74-7.85 2.7-11.6 0-.44-.37-.8-.81-.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyBoldDuotone.displayName = 'TrophyBoldDuotone';

// Triple export pattern
export { TrophyBoldDuotone, TrophyBoldDuotone as TrophyBoldDuotoneIcon, TrophyBoldDuotone as SiTrophyBoldDuotone };
export default TrophyBoldDuotone;
export type { TrophyBoldDuotoneProps };
