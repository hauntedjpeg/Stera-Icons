import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 14c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zM9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteNeutralBoldDuotone.displayName = 'EmoteNeutralBoldDuotone';

// Triple export pattern
export { EmoteNeutralBoldDuotone, EmoteNeutralBoldDuotone as EmoteNeutralBoldDuotoneIcon, EmoteNeutralBoldDuotone as SiEmoteNeutralBoldDuotone };
export default EmoteNeutralBoldDuotone;
export type { EmoteNeutralBoldDuotoneProps };
