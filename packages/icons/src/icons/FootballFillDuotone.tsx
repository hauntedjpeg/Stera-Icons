import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FootballFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FootballFillDuotone = memo(
  forwardRef<SVGSVGElement, FootballFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="football-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.71 2.44c2.47-.5 5-.4 7.06.27.72.23 1.29.8 1.52 1.52.66 2.05.77 4.6.27 7.06a13.3 13.3 0 0 1-3.47 6.8 13.3 13.3 0 0 1-6.8 3.47c-2.47.5-5 .4-7.06-.27a2.4 2.4 0 0 1-1.52-1.52c-.66-2.05-.77-4.6-.27-7.06.5-2.47 1.61-4.94 3.47-6.8a13.3 13.3 0 0 1 6.8-3.47m1.9 4.94a.88.88 0 0 0-1.23 1.24l.38.38L12 10.76l-.38-.38a.88.88 0 0 0-1.24 1.24l.38.38L9 13.76l-.38-.38a.88.88 0 0 0-1.24 1.24l2 2a.88.88 0 0 0 1.24-1.24l-.38-.38L12 13.24l.38.38a.88.88 0 0 0 1.24-1.24l-.38-.38L15 10.24l.38.38a.88.88 0 0 0 1.24-1.24z" clipRule="evenodd" opacity={.4} />
        <path d="M13.38 7.38a.9.9 0 0 1 1.24 0l2 2a.88.88 0 0 1-1.24 1.24l-.38-.38L13.24 12l.38.38a.88.88 0 0 1-1.24 1.24l-.38-.38L10.24 15l.38.38a.88.88 0 0 1-1.24 1.24l-2-2a.88.88 0 0 1 1.24-1.24l.38.38L10.76 12l-.38-.38a.88.88 0 0 1 1.24-1.24l.38.38L13.76 9l-.38-.38a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

FootballFillDuotone.displayName = 'FootballFillDuotone';

// Triple export pattern (lucide-react style)
export { FootballFillDuotone, FootballFillDuotone as FootballFillDuotoneIcon, FootballFillDuotone as SiFootballFillDuotone };
export default FootballFillDuotone;
export type { FootballFillDuotoneProps };
