import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M10.67 7.25c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75V8c0-.41.33-.75.75-.75M13.33 8.75c.42 0 .75.34.75.75v5c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75M8 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75M16 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AudioBarsCircleRegularDuotone.displayName = 'AudioBarsCircleRegularDuotone';

// Triple export pattern
export { AudioBarsCircleRegularDuotone, AudioBarsCircleRegularDuotone as AudioBarsCircleRegularDuotoneIcon, AudioBarsCircleRegularDuotone as SiAudioBarsCircleRegularDuotone };
export default AudioBarsCircleRegularDuotone;
export type { AudioBarsCircleRegularDuotoneProps };
