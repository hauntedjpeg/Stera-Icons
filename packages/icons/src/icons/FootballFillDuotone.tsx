import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FootballFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FootballFillDuotone = memo(
  forwardRef<SVGSVGElement, FootballFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.71 2.44c2.47-.5 5-.4 7.06.27.72.23 1.29.8 1.52 1.52.66 2.05.77 4.6.27 7.06-.5 2.47-1.61 4.94-3.47 6.8s-4.33 2.98-6.8 3.47-5 .4-7.06-.27c-.72-.23-1.29-.8-1.52-1.52-.66-2.05-.77-4.6-.27-7.06.5-2.47 1.61-4.94 3.47-6.8s4.33-2.98 6.8-3.47m1.9 4.94c-.33-.34-.89-.34-1.23 0s-.34.9 0 1.24l.38.38L12 10.76l-.38-.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l.38.38L9 13.76l-.38-.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2 2c.34.34.9.34 1.24 0s.34-.9 0-1.24l-.38-.38L12 13.24l.38.38c.34.34.9.34 1.24 0s.34-.9 0-1.24l-.38-.38L15 10.24l.38.38c.34.34.9.34 1.24 0s.34-.9 0-1.24z" clipRule="evenodd" opacity={.4} />
        <path d="M13.38 7.38c.34-.34.9-.34 1.24 0l2 2c.34.34.34.9 0 1.24s-.9.34-1.24 0l-.38-.38L13.24 12l.38.38c.34.34.34.9 0 1.24s-.9.34-1.24 0l-.38-.38L10.24 15l.38.38c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2-2c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l.38.38L10.76 12l-.38-.38c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l.38.38L13.76 9l-.38-.38c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

FootballFillDuotone.displayName = 'FootballFillDuotone';

// Triple export pattern
export { FootballFillDuotone, FootballFillDuotone as FootballFillDuotoneIcon, FootballFillDuotone as SiFootballFillDuotone };
export default FootballFillDuotone;
export type { FootballFillDuotoneProps };
