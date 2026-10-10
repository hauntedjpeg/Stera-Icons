import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyBoldProps = Omit<IconBaseProps, 'children'>;

const TrophyBold = memo(
  forwardRef<SVGSVGElement, TrophyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.15 2c1.36 0 2.5.97 2.76 2.25h1.76c1.32 0 2.31 1.18 2.1 2.47l-.41 2.45c-.22 1.33-1.02 2.5-2.17 3.2l-2.43 1.45q-.52 1.43-1.38 2.93c1.25.6 2.12 1.87 2.12 3.35v.9c0 .55-.45 1-1 1h-9c-.55 0-1-.45-1-1v-.9c0-1.48.87-2.75 2.12-3.35q-.86-1.5-1.38-2.93l-2.43-1.46c-1.15-.69-1.95-1.86-2.17-3.19l-.4-2.45c-.22-1.3.78-2.47 2.09-2.47h1.76C6.36 2.97 7.5 2 8.85 2zM10.2 18.4c-.9 0-1.64.7-1.7 1.6h7c-.06-.9-.8-1.6-1.7-1.6zM8.85 4c-.44 0-.8.36-.81.8-.04 3.75.04 7.37 2.7 11.6h2.52c2.66-4.23 2.74-7.85 2.7-11.6 0-.44-.37-.8-.81-.8zM4.33 6.25q-.13.02-.12.15l.4 2.45c.13.75.58 1.4 1.23 1.8l.62.37c-.33-1.66-.41-3.24-.42-4.77zm13.64 0c-.02 1.53-.1 3.11-.43 4.77l.62-.37c.65-.4 1.1-1.05 1.23-1.8l.4-2.45q.02-.13-.12-.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyBold.displayName = 'TrophyBold';

// Triple export pattern
export { TrophyBold, TrophyBold as TrophyBoldIcon, TrophyBold as SiTrophyBold };
export default TrophyBold;
export type { TrophyBoldProps };
