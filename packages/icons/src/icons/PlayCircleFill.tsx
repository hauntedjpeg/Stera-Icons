import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleFillProps = Omit<IconBaseProps, 'children'>;

const PlayCircleFill = memo(
  forwardRef<SVGSVGElement, PlayCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-1.56 5.74q-.46.04-.74.4c-.2.26-.2.75-.2 1.72V14c0 .97 0 1.46.2 1.72q.29.36.74.4c.34.02.74-.25 1.55-.79l3.01-2c.67-.45 1-.68 1.12-.96q.15-.38 0-.76c-.12-.28-.45-.5-1.12-.95L12 8.66c-.81-.54-1.21-.81-1.55-.79" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayCircleFill.displayName = 'PlayCircleFill';

// Triple export pattern
export { PlayCircleFill, PlayCircleFill as PlayCircleFillIcon, PlayCircleFill as SiPlayCircleFill };
export default PlayCircleFill;
export type { PlayCircleFillProps };
