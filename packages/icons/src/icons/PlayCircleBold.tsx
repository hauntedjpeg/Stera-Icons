import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PlayCircleBold = memo(
  forwardRef<SVGSVGElement, PlayCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96q.15.38 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79q-.46-.03-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72q.29-.37.74-.4" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayCircleBold.displayName = 'PlayCircleBold';

// Triple export pattern
export { PlayCircleBold, PlayCircleBold as PlayCircleBoldIcon, PlayCircleBold as SiPlayCircleBold };
export default PlayCircleBold;
export type { PlayCircleBoldProps };
