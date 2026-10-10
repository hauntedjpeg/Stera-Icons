import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldBoldDuotone = memo(
  forwardRef<SVGSVGElement, SoccerFieldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 3c1.66 0 3 1.34 3 3v12c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3zM4 5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13 8.65c1.45.43 2.5 1.76 2.5 3.35s-1.05 2.92-2.5 3.35V19h-2v-3.65C9.55 14.92 8.5 13.6 8.5 12S9.55 9.08 11 8.65V5h2zm-1 1.85c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
        <path d="M5.5 8c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3v-2h1.5v-4H3V8zM21 10h-1.5v4H21v2h-2.5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1H21z" />
    </IconBase>
  ))
);

SoccerFieldBoldDuotone.displayName = 'SoccerFieldBoldDuotone';

// Triple export pattern
export { SoccerFieldBoldDuotone, SoccerFieldBoldDuotone as SoccerFieldBoldDuotoneIcon, SoccerFieldBoldDuotone as SiSoccerFieldBoldDuotone };
export default SoccerFieldBoldDuotone;
export type { SoccerFieldBoldDuotoneProps };
