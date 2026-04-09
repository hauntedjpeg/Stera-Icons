import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayFillProps = Omit<IconBaseProps, 'children'>;

const PlayFill = memo(
  forwardRef<SVGSVGElement, PlayFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-fill" {...props}>
      <path d="M6.15 2.04c.64-.07 1.27.13 1.9.42q.95.46 2.39 1.3l7 4.04c.97.56 1.75 1 2.32 1.4s1.06.85 1.32 1.43c.4.87.4 1.87 0 2.74a3.6 3.6 0 0 1-1.32 1.42q-.86.59-2.31 1.4l-7.01 4.04q-1.44.85-2.39 1.3c-.63.3-1.26.5-1.9.43-.95-.1-1.82-.6-2.38-1.36a3.6 3.6 0 0 1-.58-1.86c-.07-.7-.06-1.59-.06-2.7V7.96q-.02-1.65.06-2.7c.06-.7.2-1.34.58-1.86a3.4 3.4 0 0 1 2.38-1.36" />
    </IconBase>
  ))
);

PlayFill.displayName = 'PlayFill';

// Triple export pattern (lucide-react style)
export { PlayFill, PlayFill as PlayFillIcon, PlayFill as SiPlayFill };
export default PlayFill;
export type { PlayFillProps };
