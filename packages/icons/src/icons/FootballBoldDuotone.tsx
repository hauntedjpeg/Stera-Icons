import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FootballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FootballBoldDuotone = memo(
  forwardRef<SVGSVGElement, FootballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.69 2.31c2.48-.5 5.04-.4 7.12.28.76.25 1.35.84 1.6 1.6.67 2.08.78 4.64.28 7.12-.5 2.5-1.63 4.98-3.52 6.86-1.88 1.89-4.37 3.01-6.86 3.52-2.48.5-5.04.4-7.12-.28-.76-.25-1.35-.84-1.6-1.6-.67-2.08-.78-4.64-.28-7.12.5-2.5 1.63-4.98 3.51-6.86C7.71 3.94 10.2 2.82 12.7 2.3m6.5 2.18c-1.7-.55-3.91-.66-6.1-.22-2.2.45-4.3 1.43-5.85 2.97s-2.52 3.65-2.97 5.84c-.44 2.2-.33 4.4.22 6.12q.09.23.31.3c1.71.56 3.92.67 6.12.23s4.3-1.43 5.84-2.97 2.52-3.65 2.97-5.84c.44-2.2.33-4.4-.22-6.12q-.09-.22-.31-.3" clipRule="evenodd" opacity={.4} />
        <path d="M13.3 7.3c.38-.4 1.02-.4 1.4 0l2 2c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-.3-.29L13.41 12l.3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-.29-.29L10.41 15l.3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-2-2c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l.29.29L10.59 12l-.3-.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l.29.29L13.59 9l-.3-.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

FootballBoldDuotone.displayName = 'FootballBoldDuotone';

// Triple export pattern
export { FootballBoldDuotone, FootballBoldDuotone as FootballBoldDuotoneIcon, FootballBoldDuotone as SiFootballBoldDuotone };
export default FootballBoldDuotone;
export type { FootballBoldDuotoneProps };
