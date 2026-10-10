import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneBoldProps = Omit<IconBaseProps, 'children'>;

const BoneBold = memo(
  forwardRef<SVGSVGElement, BoneBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.82 3.05c1.4-1.4 3.68-1.4 5.08 0 .57.58.9 1.3 1.01 2.04.75.1 1.47.44 2.04 1.01 1.4 1.4 1.4 3.68 0 5.08-1.16 1.16-2.9 1.36-4.27.6l-4.9 4.9c.76 1.36.56 3.11-.6 4.27-1.4 1.4-3.67 1.4-5.08 0-.57-.58-.9-1.3-1-2.04-.75-.1-1.47-.44-2.05-1.01-1.4-1.4-1.4-3.68 0-5.08 1.16-1.16 2.9-1.36 4.27-.6l4.9-4.9c-.76-1.36-.56-3.11.6-4.27m3.66 1.42c-.62-.62-1.62-.62-2.25 0s-.62 1.62 0 2.24c.4.4.4 1.03 0 1.42l-6.1 6.1c-.4.4-1.02.4-1.42 0-.62-.62-1.62-.62-2.24 0s-.62 1.63 0 2.25c.39.4.93.54 1.44.44.33-.07.67.03.9.27.24.23.34.57.28.9-.1.51.04 1.05.43 1.44.62.63 1.63.63 2.25 0 .62-.62.62-1.62 0-2.24-.4-.4-.4-1.03 0-1.42l6.1-6.1c.4-.4 1.03-.4 1.42 0 .62.62 1.62.62 2.24 0s.63-1.63 0-2.25c-.39-.4-.93-.54-1.44-.43-.32.06-.66-.04-.9-.28-.24-.23-.34-.58-.27-.9.1-.51-.05-1.05-.44-1.44" clipRule="evenodd" />
    </IconBase>
  ))
);

BoneBold.displayName = 'BoneBold';

// Triple export pattern
export { BoneBold, BoneBold as BoneBoldIcon, BoneBold as SiBoneBold };
export default BoneBold;
export type { BoneBoldProps };
