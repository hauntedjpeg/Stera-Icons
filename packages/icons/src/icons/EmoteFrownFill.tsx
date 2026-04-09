import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownFillProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownFill = memo(
  forwardRef<SVGSVGElement, EmoteFrownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-frown-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 11.25c-1.59 0-3.02.7-3.93 1.82a.87.87 0 0 0 1.36 1.1A3.3 3.3 0 0 1 12 15.12c1.07 0 2 .48 2.57 1.18a.87.87 0 0 0 1.36-1.1A5 5 0 0 0 12 13.38M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownFill.displayName = 'EmoteFrownFill';

// Triple export pattern (lucide-react style)
export { EmoteFrownFill, EmoteFrownFill as EmoteFrownFillIcon, EmoteFrownFill as SiEmoteFrownFill };
export default EmoteFrownFill;
export type { EmoteFrownFillProps };
