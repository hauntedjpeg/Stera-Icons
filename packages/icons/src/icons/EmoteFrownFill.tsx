import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownFillProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownFill = memo(
  forwardRef<SVGSVGElement, EmoteFrownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 11.25c-1.59 0-3.02.7-3.93 1.82-.3.37-.25.92.13 1.23.37.3.92.25 1.23-.13.57-.7 1.5-1.18 2.57-1.18s2 .48 2.57 1.18c.3.38.86.43 1.23.13.38-.3.43-.86.13-1.23-.91-1.12-2.34-1.82-3.93-1.82M9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownFill.displayName = 'EmoteFrownFill';

// Triple export pattern
export { EmoteFrownFill, EmoteFrownFill as EmoteFrownFillIcon, EmoteFrownFill as SiEmoteFrownFill };
export default EmoteFrownFill;
export type { EmoteFrownFillProps };
