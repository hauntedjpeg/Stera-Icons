import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldBoldProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldBold = memo(
  forwardRef<SVGSVGElement, SoccerFieldBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 3c1.66 0 3 1.34 3 3v12c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3zm-7 5.65c1.45.43 2.5 1.76 2.5 3.35s-1.05 2.92-2.5 3.35V19h7c.55 0 1-.45 1-1v-2h-2.5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1H21V6c0-.55-.45-1-1-1h-7zM4 5c-.55 0-1 .45-1 1v2h2.5c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3v2c0 .55.45 1 1 1h7v-3.65C9.55 14.92 8.5 13.6 8.5 12S9.55 9.08 11 8.65V5zm-1 9h1.5v-4H3zm16.5 0H21v-4h-1.5zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerFieldBold.displayName = 'SoccerFieldBold';

// Triple export pattern
export { SoccerFieldBold, SoccerFieldBold as SoccerFieldBoldIcon, SoccerFieldBold as SiSoccerFieldBold };
export default SoccerFieldBold;
export type { SoccerFieldBoldProps };
