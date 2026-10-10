import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HardDriveBoldProps = Omit<IconBaseProps, 'children'>;

const HardDriveBold = memo(
  forwardRef<SVGSVGElement, HardDriveBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M10 14.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
        <path fillRule="evenodd" d="M16.65 3.5c1.22 0 2.33.75 2.78 1.89l2.49 6.21.04.11.03.14v.06L22 12v4.5q-.02 1.33-.76 2.34l-.01.02c-.73 1-1.9 1.64-3.23 1.64H6c-1.33 0-2.5-.65-3.23-1.64l-.02-.02C2.28 18.18 2 17.37 2 16.5v-4.6l.01-.05q0-.08.03-.14l.04-.1 2.49-6.22C5.02 4.25 6.13 3.5 7.35 3.5zM4 14.7c0 .86 0 1.44.04 1.89.03.42.1.64.17.8q.12.23.3.44.07.1.17.17.14.12.3.21l.11.07c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18l.12-.07.3-.21.16-.17q.18-.2.3-.44c.07-.16.14-.38.17-.8.04-.45.04-1.03.04-1.89V13H4zm3.35-9.2c-.4 0-.77.25-.92.63L4.48 11h15.04l-1.95-4.87c-.15-.38-.52-.63-.92-.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

HardDriveBold.displayName = 'HardDriveBold';

// Triple export pattern
export { HardDriveBold, HardDriveBold as HardDriveBoldIcon, HardDriveBold as SiHardDriveBold };
export default HardDriveBold;
export type { HardDriveBoldProps };
