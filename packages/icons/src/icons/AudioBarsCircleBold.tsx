import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleBoldProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleBold = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.67 6.5c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-9c0-.55.44-1 1-1M13.33 8.5c.56 0 1 .45 1 1v5c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1M8 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1M16 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleBold.displayName = 'AudioBarsCircleBold';

// Triple export pattern
export { AudioBarsCircleBold, AudioBarsCircleBold as AudioBarsCircleBoldIcon, AudioBarsCircleBold as SiAudioBarsCircleBold };
export default AudioBarsCircleBold;
export type { AudioBarsCircleBoldProps };
