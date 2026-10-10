import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsFill = memo(
  forwardRef<SVGSVGElement, AudioBarsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 2.75c.69 0 1.25.56 1.25 1.25v16c0 .69-.56 1.25-1.25 1.25S8.25 20.69 8.25 20V4c0-.69.56-1.25 1.25-1.25M14.5 5.75c.69 0 1.25.56 1.25 1.25v10c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25M4.5 8.75c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25S3.25 14.69 3.25 14v-4c0-.69.56-1.25 1.25-1.25M19.5 8.75c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

AudioBarsFill.displayName = 'AudioBarsFill';

// Triple export pattern
export { AudioBarsFill, AudioBarsFill as AudioBarsFillIcon, AudioBarsFill as SiAudioBarsFill };
export default AudioBarsFill;
export type { AudioBarsFillProps };
