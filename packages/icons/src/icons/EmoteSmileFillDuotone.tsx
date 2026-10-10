import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m4.3 11.69c-.38-.3-.93-.25-1.23.13-.69.86-1.8 1.43-3.07 1.43s-2.38-.57-3.07-1.43c-.3-.38-.85-.43-1.23-.13s-.43.85-.13 1.23c1.02 1.27 2.63 2.07 4.43 2.07s3.4-.8 4.43-2.07c.3-.38.25-.93-.13-1.23M9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.07 13.95c.3-.38.85-.43 1.23-.13s.43.85.13 1.23c-1.02 1.27-2.63 2.07-4.43 2.07s-3.4-.8-4.43-2.07c-.3-.38-.25-.93.13-1.23s.93-.25 1.23.13c.69.86 1.8 1.43 3.07 1.43s2.38-.57 3.07-1.43M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteSmileFillDuotone.displayName = 'EmoteSmileFillDuotone';

// Triple export pattern
export { EmoteSmileFillDuotone, EmoteSmileFillDuotone as EmoteSmileFillDuotoneIcon, EmoteSmileFillDuotone as SiEmoteSmileFillDuotone };
export default EmoteSmileFillDuotone;
export type { EmoteSmileFillDuotoneProps };
