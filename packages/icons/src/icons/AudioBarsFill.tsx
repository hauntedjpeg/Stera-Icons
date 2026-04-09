import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsFill = memo(
  forwardRef<SVGSVGElement, AudioBarsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-fill" {...props}>
      <path d="M9.5 2.75c.69 0 1.25.56 1.25 1.25v16a1.25 1.25 0 1 1-2.5 0V4c0-.69.56-1.25 1.25-1.25M14.5 5.75c.69 0 1.25.56 1.25 1.25v10a1.25 1.25 0 1 1-2.5 0V7c0-.69.56-1.25 1.25-1.25M4.5 8.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 1 1-2.5 0v-4c0-.69.56-1.25 1.25-1.25M19.5 8.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 1 1-2.5 0v-4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

AudioBarsFill.displayName = 'AudioBarsFill';

// Triple export pattern (lucide-react style)
export { AudioBarsFill, AudioBarsFill as AudioBarsFillIcon, AudioBarsFill as SiAudioBarsFill };
export default AudioBarsFill;
export type { AudioBarsFillProps };
