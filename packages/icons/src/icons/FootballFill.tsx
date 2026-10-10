import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FootballFillProps = Omit<IconBaseProps, 'children'>;

const FootballFill = memo(
  forwardRef<SVGSVGElement, FootballFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.71 2.44c2.47-.5 5-.4 7.06.27.72.23 1.29.8 1.52 1.52.66 2.05.77 4.6.27 7.06-.5 2.47-1.61 4.94-3.47 6.8s-4.33 2.98-6.8 3.47-5 .4-7.06-.27c-.72-.23-1.29-.8-1.52-1.52-.66-2.05-.77-4.6-.27-7.06.5-2.47 1.61-4.94 3.47-6.8s4.33-2.98 6.8-3.47m1.9 4.94c-.33-.34-.89-.34-1.23 0s-.34.9 0 1.24l.38.38L12 10.76l-.38-.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l.38.38L9 13.76l-.38-.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2 2c.34.34.9.34 1.24 0s.34-.9 0-1.24l-.38-.38L12 13.24l.38.38c.34.34.9.34 1.24 0s.34-.9 0-1.24l-.38-.38L15 10.24l.38.38c.34.34.9.34 1.24 0s.34-.9 0-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

FootballFill.displayName = 'FootballFill';

// Triple export pattern
export { FootballFill, FootballFill as FootballFillIcon, FootballFill as SiFootballFill };
export default FootballFill;
export type { FootballFillProps };
