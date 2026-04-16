import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m5.73 7.63.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.16.38.18.72.03.32.02.73v4.8q0 .41-.02.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02H5.6q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.03-.32-.02-.73v-4.8q0-.41.02-.73.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.04.73-.03zM18.4 3.13l.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.17.38.18.72.02.32.02.73v6.8q0 .41-.02.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02h-.13q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.02-.32-.02-.73V5.6q0-.41.02-.73.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.03.73-.02zM12.07 6.13l.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.16.38.18.72.02.32.01.73v2.8l-.01.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02h-.14q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.02-.32-.01-.73V8.6l.01-.73q.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.04.73-.03z" opacity={0.4} />
        <path d="M21 19.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

ChartWaterfallXFillDuotone.displayName = 'ChartWaterfallXFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXFillDuotone, ChartWaterfallXFillDuotone as ChartWaterfallXFillDuotoneIcon, ChartWaterfallXFillDuotone as SiChartWaterfallXFillDuotone };
export default ChartWaterfallXFillDuotone;
export type { ChartWaterfallXFillDuotoneProps };
