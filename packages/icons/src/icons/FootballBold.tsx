import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FootballBoldProps = Omit<IconBaseProps, 'children'>;

const FootballBold = memo(
  forwardRef<SVGSVGElement, FootballBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.3 7.3a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1-1.4 1.4l-.3-.29L13.41 12l.3.3a1 1 0 0 1-1.42 1.4l-.29-.29L10.41 15l.3.3a1 1 0 0 1-1.42 1.4l-2-2a1 1 0 1 1 1.42-1.4l.29.29L10.59 12l-.3-.3a1 1 0 0 1 1.42-1.4l.29.29L13.59 9l-.3-.3a1 1 0 0 1 0-1.4" />
        <path fillRule="evenodd" d="M12.69 2.31c2.48-.5 5.04-.4 7.12.28.76.25 1.36.84 1.6 1.6.67 2.08.78 4.64.28 7.12a13.4 13.4 0 0 1-3.52 6.86 13.4 13.4 0 0 1-6.86 3.52c-2.48.5-5.04.4-7.12-.28a2.5 2.5 0 0 1-1.6-1.6 14.5 14.5 0 0 1-.28-7.12c.5-2.5 1.63-4.98 3.52-6.86C7.7 3.94 10.2 2.82 12.69 2.3m6.5 2.18c-1.7-.55-3.91-.66-6.1-.22-2.2.45-4.3 1.43-5.85 2.97a11.5 11.5 0 0 0-2.97 5.84c-.44 2.2-.33 4.4.22 6.12q.09.23.31.3c1.71.56 3.92.67 6.12.23s4.3-1.43 5.84-2.97a11.5 11.5 0 0 0 2.97-5.84c.44-2.2.33-4.4-.22-6.12a.5.5 0 0 0-.31-.3" clipRule="evenodd" />
    </IconBase>
  ))
);

FootballBold.displayName = 'FootballBold';

// Triple export pattern (lucide-react style)
export { FootballBold, FootballBold as FootballBoldIcon, FootballBold as SiFootballBold };
export default FootballBold;
export type { FootballBoldProps };
