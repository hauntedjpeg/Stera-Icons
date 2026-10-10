import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-3.75 11.5c-.33 0-.63.18-.78.47s-.12.64.06.9c1 1.43 2.63 2.38 4.47 2.38s3.46-.95 4.47-2.38c.18-.26.2-.61.06-.9s-.45-.47-.78-.47zM9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.75 13.63c.33 0 .63.18.78.47s.12.64-.06.9c-1 1.43-2.63 2.38-4.47 2.38S8.54 16.43 7.53 15c-.18-.26-.2-.61-.06-.9s.45-.47.78-.47zM9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteGrinFillDuotone.displayName = 'EmoteGrinFillDuotone';

// Triple export pattern
export { EmoteGrinFillDuotone, EmoteGrinFillDuotone as EmoteGrinFillDuotoneIcon, EmoteGrinFillDuotone as SiEmoteGrinFillDuotone };
export default EmoteGrinFillDuotone;
export type { EmoteGrinFillDuotoneProps };
