import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.4 8.13.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.16.38.18.72.02.32.02.73v2.8q0 .41-.02.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02h-.8q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.02-.32-.02-.73v-2.8q0-.41.02-.73.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.04.73-.03z" opacity={.4} />
        <path d="m4.4 11.13.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.17.38.18.72.02.32.01.73v4.8l-.01.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02h-.8q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.02-.32-.01-.73v-4.8l.01-.73q.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.04.73-.03zM20.4 3.13l.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.17.38.18.72.02.32.02.73v8.8q0 .41-.02.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02h-.8q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.02-.32-.02-.73V5.6q0-.41.02-.73.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.03.73-.02z" />
    </IconBase>
  ))
);

ChartWaterfallFillDuotone.displayName = 'ChartWaterfallFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallFillDuotone, ChartWaterfallFillDuotone as ChartWaterfallFillDuotoneIcon, ChartWaterfallFillDuotone as SiChartWaterfallFillDuotone };
export default ChartWaterfallFillDuotone;
export type { ChartWaterfallFillDuotoneProps };
