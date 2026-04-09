import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-sad-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 11.5c-1.19 0-2.3.32-3.2.87a.87.87 0 1 0 .9 1.5 4.4 4.4 0 0 1 2.3-.62q1.34.02 2.3.62a.87.87 0 1 0 .9-1.5 6 6 0 0 0-3.2-.87M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.63c1.19 0 2.3.32 3.2.87a.87.87 0 1 1-.9 1.5 4.4 4.4 0 0 0-2.3-.62q-1.34.02-2.3.62a.87.87 0 1 1-.9-1.5c.9-.55 2.01-.87 3.2-.87M9 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

EmoteSadFillDuotone.displayName = 'EmoteSadFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSadFillDuotone, EmoteSadFillDuotone as EmoteSadFillDuotoneIcon, EmoteSadFillDuotone as SiEmoteSadFillDuotone };
export default EmoteSadFillDuotone;
export type { EmoteSadFillDuotoneProps };
