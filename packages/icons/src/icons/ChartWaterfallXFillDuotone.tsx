import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartWaterfallXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m5.73 7.63.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.16.38.18.72.02.32.02.73v4.8q0 .41-.02.73-.01.34-.19.72-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02H5.6q-.41 0-.73-.02-.34-.01-.72-.19-.54-.28-.82-.82-.18-.38-.19-.72-.03-.32-.02-.73v-4.8q0-.41.02-.73.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.04.73-.03zM18.4 3.13l.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.17.38.18.72.02.32.02.73v6.8q0 .41-.02.73-.01.34-.19.72-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02h-.13q-.41 0-.73-.02-.34-.01-.72-.19-.54-.28-.82-.82-.18-.38-.19-.72-.02-.32-.02-.73V5.6q0-.41.02-.73.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.03.73-.02zM12.07 6.13l.73.01q.25.02.53.1l.2.09.12.07q.45.28.7.75.16.38.18.72.02.32.01.73v2.8l-.01.73q-.01.34-.19.72-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02h-.14q-.41 0-.73-.02-.34-.01-.72-.19-.54-.28-.82-.82-.18-.38-.19-.72-.02-.32-.01-.73V8.6l.01-.73q.01-.34.19-.72l.07-.13q.28-.45.75-.7l.19-.07q.28-.1.53-.1.32-.04.73-.03z" opacity={0.4} />
        <path d="M21 19.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ChartWaterfallXFillDuotone.displayName = 'ChartWaterfallXFillDuotone';

// Triple export pattern
export { ChartWaterfallXFillDuotone, ChartWaterfallXFillDuotone as ChartWaterfallXFillDuotoneIcon, ChartWaterfallXFillDuotone as SiChartWaterfallXFillDuotone };
export default ChartWaterfallXFillDuotone;
export type { ChartWaterfallXFillDuotoneProps };
