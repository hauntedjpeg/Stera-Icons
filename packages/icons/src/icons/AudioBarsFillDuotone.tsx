import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsFillDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-fill-duotone" {...props}>
      <path d="M9.5 2.75c.69 0 1.25.56 1.25 1.25v16a1.25 1.25 0 1 1-2.5 0V4c0-.69.56-1.25 1.25-1.25M19.5 8.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 1 1-2.5 0v-4c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M14.5 5.75c.69 0 1.25.56 1.25 1.25v10a1.25 1.25 0 1 1-2.5 0V7c0-.69.56-1.25 1.25-1.25M4.5 8.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 1 1-2.5 0v-4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

AudioBarsFillDuotone.displayName = 'AudioBarsFillDuotone';

// Triple export pattern (lucide-react style)
export { AudioBarsFillDuotone, AudioBarsFillDuotone as AudioBarsFillDuotoneIcon, AudioBarsFillDuotone as SiAudioBarsFillDuotone };
export default AudioBarsFillDuotone;
export type { AudioBarsFillDuotoneProps };
