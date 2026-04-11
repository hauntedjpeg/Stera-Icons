import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileFill = memo(
  forwardRef<SVGSVGElement, EmoteSmileFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.3 11.69a.9.9 0 0 0-1.23.13A4 4 0 0 1 12 15.38a4 4 0 0 1-3.07-1.43.88.88 0 0 0-1.36 1.1A5.7 5.7 0 0 0 12 17.12c1.8 0 3.4-.8 4.43-2.07a.9.9 0 0 0-.13-1.23M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSmileFill.displayName = 'EmoteSmileFill';

// Triple export pattern (lucide-react style)
export { EmoteSmileFill, EmoteSmileFill as EmoteSmileFillIcon, EmoteSmileFill as SiEmoteSmileFill };
export default EmoteSmileFill;
export type { EmoteSmileFillProps };
