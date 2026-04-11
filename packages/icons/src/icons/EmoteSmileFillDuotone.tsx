import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSmileFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.3 11.69a.9.9 0 0 0-1.23.13A4 4 0 0 1 12 15.38a4 4 0 0 1-3.07-1.43.88.88 0 0 0-1.36 1.1A5.7 5.7 0 0 0 12 17.12c1.8 0 3.4-.8 4.43-2.07a.9.9 0 0 0-.13-1.23M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M15.07 13.95a.88.88 0 0 1 1.36 1.1A5.7 5.7 0 0 1 12 17.12c-1.8 0-3.4-.8-4.43-2.07a.88.88 0 0 1 1.36-1.1c.69.86 1.8 1.43 3.07 1.43s2.38-.57 3.07-1.43M9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteSmileFillDuotone.displayName = 'EmoteSmileFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSmileFillDuotone, EmoteSmileFillDuotone as EmoteSmileFillDuotoneIcon, EmoteSmileFillDuotone as SiEmoteSmileFillDuotone };
export default EmoteSmileFillDuotone;
export type { EmoteSmileFillDuotoneProps };
