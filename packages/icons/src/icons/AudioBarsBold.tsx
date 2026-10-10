import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsBoldProps = Omit<IconBaseProps, 'children'>;

const AudioBarsBold = memo(
  forwardRef<SVGSVGElement, AudioBarsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 3c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1M14.5 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1M4.5 9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1M19.5 9c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

AudioBarsBold.displayName = 'AudioBarsBold';

// Triple export pattern
export { AudioBarsBold, AudioBarsBold as AudioBarsBoldIcon, AudioBarsBold as SiAudioBarsBold };
export default AudioBarsBold;
export type { AudioBarsBoldProps };
