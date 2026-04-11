import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FootballRegularProps = Omit<IconBaseProps, 'children'>;

const FootballRegular = memo(
  forwardRef<SVGSVGElement, FootballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.47 7.47c.3-.3.77-.3 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.47-.47L13.06 12l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47L10.06 15l.47.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 1 1 1.06-1.06l.47.47L10.94 12l-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47L13.94 9l-.47-.47a.75.75 0 0 1 0-1.06" />
        <path fillRule="evenodd" d="M12.74 2.56c2.44-.5 4.96-.39 7 .27.68.22 1.21.75 1.43 1.44.66 2.03.77 4.55.27 7S19.84 16.15 18 18a13 13 0 0 1-6.74 3.44c-2.44.5-4.96.39-7-.27a2.2 2.2 0 0 1-1.43-1.44 14 14 0 0 1-.27-7C3.06 10.29 4.16 7.85 6 6a13 13 0 0 1 6.74-3.44m6.53 1.7c-1.75-.57-4-.68-6.24-.23a11.7 11.7 0 0 0-5.97 3.03 11.7 11.7 0 0 0-3.03 5.97c-.45 2.24-.34 4.49.22 6.24q.13.35.48.48c1.75.56 4 .67 6.24.22a11.7 11.7 0 0 0 5.97-3.03 11.7 11.7 0 0 0 3.03-5.97c.45-2.24.34-4.49-.22-6.24a.7.7 0 0 0-.48-.48" clipRule="evenodd" />
    </IconBase>
  ))
);

FootballRegular.displayName = 'FootballRegular';

// Triple export pattern (lucide-react style)
export { FootballRegular, FootballRegular as FootballRegularIcon, FootballRegular as SiFootballRegular };
export default FootballRegular;
export type { FootballRegularProps };
