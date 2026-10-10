import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PlayCircleRegular = memo(
  forwardRef<SVGSVGElement, PlayCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96q.15.38 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79q-.46-.03-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72q.29-.37.74-.4" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayCircleRegular.displayName = 'PlayCircleRegular';

// Triple export pattern
export { PlayCircleRegular, PlayCircleRegular as PlayCircleRegularIcon, PlayCircleRegular as SiPlayCircleRegular };
export default PlayCircleRegular;
export type { PlayCircleRegularProps };
