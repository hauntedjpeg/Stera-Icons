import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleFill = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m-1.33 4.75c-.42 0-.75.34-.75.75v9c0 .41.33.75.75.75.41 0 .75-.34.75-.75v-9c0-.41-.34-.75-.75-.75m2.66 2c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75.42 0 .75-.34.75-.75v-5c0-.41-.33-.75-.75-.75M8 10.25c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75v-2c0-.41-.34-.75-.75-.75m8 0c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75v-2c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleFill.displayName = 'AudioBarsCircleFill';

// Triple export pattern
export { AudioBarsCircleFill, AudioBarsCircleFill as AudioBarsCircleFillIcon, AudioBarsCircleFill as SiAudioBarsCircleFill };
export default AudioBarsCircleFill;
export type { AudioBarsCircleFillProps };
