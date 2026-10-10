import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 11.5c-1.19 0-2.3.32-3.2.87-.42.26-.55.8-.3 1.2.26.42.8.55 1.2.3q.96-.6 2.3-.62 1.34.02 2.3.62c.4.25.94.12 1.2-.3.25-.4.12-.94-.3-1.2-.9-.55-2.01-.87-3.2-.87M9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.63c1.19 0 2.3.32 3.2.87.42.26.55.8.3 1.2-.26.42-.8.55-1.2.3q-.96-.6-2.3-.62-1.34.02-2.3.62c-.4.25-.94.12-1.2-.3-.25-.4-.12-.94.3-1.2.9-.55 2.01-.87 3.2-.87M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

EmoteSadFillDuotone.displayName = 'EmoteSadFillDuotone';

// Triple export pattern
export { EmoteSadFillDuotone, EmoteSadFillDuotone as EmoteSadFillDuotoneIcon, EmoteSadFillDuotone as SiEmoteSadFillDuotone };
export default EmoteSadFillDuotone;
export type { EmoteSadFillDuotoneProps };
