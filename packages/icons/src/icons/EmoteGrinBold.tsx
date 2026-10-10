import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinBold = memo(
  forwardRef<SVGSVGElement, EmoteGrinBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.75 13.5c.37 0 .72.2.89.54.17.33.14.73-.07 1.04-1.03 1.45-2.68 2.42-4.57 2.42s-3.54-.97-4.57-2.42c-.21-.3-.24-.71-.07-1.04s.52-.54.89-.54zM9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteGrinBold.displayName = 'EmoteGrinBold';

// Triple export pattern
export { EmoteGrinBold, EmoteGrinBold as EmoteGrinBoldIcon, EmoteGrinBold as SiEmoteGrinBold };
export default EmoteGrinBold;
export type { EmoteGrinBoldProps };
